import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import userService from '../../services/userService';  // userService'yi ekliyoruz

const Step3_BirthdayGender = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password } = route.params;
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    // Boş alan kontrolü
    if (!dob || !gender) {
      setError('Doğum günü ve cinsiyet zorunludur!');
      return;
    }

    try {
      // Kullanıcı verilerini birleştiriyoruz
      const userData = { username, firstName, lastName, email, password, dob, gender };
      
      // Veriyi backend'e gönderiyoruz
      await userService.updateUserInfo(userData);  // userService üzerinden backend'e gönderim yapıyoruz

      // Başarıyla geçiş yapıyoruz
      navigation.navigate('Step4_PhotoBio', { userData });  // Burada Step4_Finish ekranına yönlendiriyoruz
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
        <Text style={styles.title}>Doğum Günü ve Cinsiyet Seçin</Text>

        {/* Doğum Günü Girişi */}
        <TextInput
          style={styles.input}
          placeholder="Doğum Günü (YYYY-MM-DD)"
          placeholderTextColor="#aaa"
          value={dob}
          onChangeText={setDob}
          keyboardType="default"
        />

        {/* Cinsiyet Seçimi */}
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Cinsiyet Seçin" value="" />
          <Picker.Item label="Erkek" value="male" />
          <Picker.Item label="Kadın" value="female" />
          <Picker.Item label="Diğer" value="other" />
        </Picker>

        {/* Hata Mesajı */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Devam Et Butonu */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>
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
});

export default Step3_BirthdayGender;
