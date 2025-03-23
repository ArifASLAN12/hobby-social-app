import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import userService from '../../services/userService';

const Step1_Names = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    // Boş alan kontrolü
    if (username.trim() === '' || firstName.trim() === '' || lastName.trim() === '') {
      setError('Tüm alanlar zorunludur!');
      return;
    }

    try {
      // Kullanıcı verilerini gönderiyoruz
      const userData = { username, firstName, lastName };
      await userService.register(username, firstName, lastName, userData.email, userData.password); // E-posta ve şifreyi almanız gerekebilir
      navigation.navigate('Step2_EmailPassword', { username });
    } catch (err) {
      setError('Kayıt sırasında bir hata oluştu!');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Kullanıcı Adı, Ad ve Soyadınızı Girin</Text>

        {/* Kullanıcı Adı */}
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı adı"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        {/* Ad */}
        <TextInput
          style={styles.input}
          placeholder="Ad"
          placeholderTextColor="#aaa"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Soyad */}
        <TextInput
          style={styles.input}
          placeholder="Soyad"
          placeholderTextColor="#aaa"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Hata Mesajı */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Devam Et Butonu */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        Bir hesap oluşturarak,{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
          Şartlar ve Gizlilik Politikası
        </Text>{' '}
        ile aynı fikirde olduğunuzu kabul etmiş olursunuz.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#1e1e1e',
  },
  button: {
    backgroundColor: '#0095F6',
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
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
    textAlign: 'center',
  },
  termsText: {
    color: '#bbb',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#0095F6',
    fontWeight: 'bold',
  },
});

export default Step1_Names;
