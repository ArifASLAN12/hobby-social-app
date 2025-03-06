import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import authService from '../services/authService';  // authService'i dahil et

const Step2_FullName = ({ route, navigation }) => {
  const { username } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(''); // Hata mesajları için durum ekleyelim

  const handleNext = async () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('İsim ve Soyisim boş olamaz!');
      return;
    }

    try {
      // Backend'e isim ve soyisimle kaydederken authService'i kullanıyoruz
      const userData = { username, firstName, lastName };  // Model oluşturuluyor
      await authService.register(userData); // Kullanıcı kaydını yapıyoruz

      // Eğer başarılıysa, kullanıcıyı bir sonraki adıma yönlendiriyoruz
      navigation.navigate('Step3_EmailPassword', { username, firstName, lastName });
    } catch (err) {
      setError('Kayıt sırasında bir hata oluştu!');  // Hata mesajı
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>İsim ve Soyisim</Text>
      <TextInput
        style={styles.input}
        placeholder="İsim"
        placeholderTextColor="#aaa"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Soyisim"
        placeholderTextColor="#aaa"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
      />
      
      {/* Hata mesajı */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#222',
  },
  button: {
    backgroundColor: '#0095F6',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Step2_FullName;
