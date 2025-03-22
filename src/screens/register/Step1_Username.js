import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import authService from '../../services/authService';

const Step1_Username = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (username.trim() === '') {
<<<<<<< HEAD
      setError('Kullanıcı adı boş olamaz!');
=======
      setError('Kullanıcı adı boş olamaz1!');  // Hata kontrolü ekledik
>>>>>>> a2bdb2f63f961c9a1c703738c3fb6d8f4772e80f
      return;
    }

    try {
      const userData = { username };
      await authService.register(userData);
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
        <Text style={styles.title}>Kullanıcı Adınızı Girin</Text>

        <TextInput
          style={styles.input}
          placeholder="Kullanıcı adı"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

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
    marginBottom: 20, // Yazıyı en aşağı almak için
  },
  link: {
    color: '#0095F6',
    fontWeight: 'bold',
  },
});

export default Step1_Username;
