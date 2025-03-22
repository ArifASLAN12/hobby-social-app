import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Image, Alert } from 'react-native';
import authService from '../services/authService'; // authService'yi import et

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authService.login(username, password); // Login fonksiyonunu çağır
      if (response.token) {
        // Login başarılı ise, ana ekrana yönlendir
        Alert.alert('Giriş Başarılı', 'Hesabınıza başarıyla giriş yapıldı.');
        navigation.navigate('Home'); // Burada 'Home' ekranını ana ekran olarak varsaydım, istediğiniz ekranı belirleyin
      }
    } catch (error) {
      console.error('Giriş hatası:', error.message);
      Alert.alert('Giriş Hatası', 'Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.hobiiText}>Hobii</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı adı veya e-posta"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Şifremi unuttum?</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Step1_Username')}>
          <Text style={styles.registerLink}> Kaydol</Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  hobiiText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
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
  forgotPassword: {
    color: '#0095F6',
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    fontSize: 14,
  },
  registerLink: {
    color: '#0095F6',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default LoginScreen;
