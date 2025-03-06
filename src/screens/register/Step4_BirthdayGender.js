import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import authService from '../services/authService';  // authService'i dahil et

const Step4_BirthdayGender = ({ route, navigation }) => {
  const { username, email, password, firstName, lastName } = route.params;  // Parametrelerden alınan veriler
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(''); // Hata mesajları için durum ekleyelim

  const handleNext = async () => {
    if (birthday.trim() === '' || gender.trim() === '') {
      setError('Doğum tarihi ve cinsiyet boş olamaz!');
      return;
    }

    try {
      // Kullanıcı verilerini oluştur
      const userData = { username, firstName, lastName, email, password, birthday, gender };

      // authService ile backend'e kaydet
      await authService.register(userData);  // Kayıt işlemi

      // Kayıt başarılıysa, sonraki adıma yönlendir
      navigation.navigate('Step5_PhotoBio', { username, email, password, firstName, lastName, birthday, gender });
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
      <Text style={styles.title}>Doğum Tarihiniz ve Cinsiyet</Text>
      <TextInput
        style={styles.input}
        placeholder="Doğum tarihi (GG/AA/YYYY)"
        placeholderTextColor="#aaa"
        value={birthday}
        onChangeText={setBirthday}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Cinsiyet"
        placeholderTextColor="#aaa"
        value={gender}
        onChangeText={setGender}
        autoCapitalize="none"
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

export default Step4_BirthdayGender;
