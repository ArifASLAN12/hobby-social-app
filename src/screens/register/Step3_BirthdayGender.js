import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Step3_BirthdayGender = ({ route, navigation }) => {
  const { username, email, password } = route.params;

  // Bugünün tarihini al
  const today = new Date();
  
  // Bugün ay ve gün ile birlikte varsayılan tarih olarak ayarlandı
  const defaultDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // 18 yaşında olmak için

  const [birthday, setBirthday] = useState(defaultDate.toLocaleDateString('tr-TR'));
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (!birthday || !gender) {
      setError('Doğum tarihi ve cinsiyet boş olamaz!');
      return;
    }
    navigation.navigate('Step5_PhotoBio', { username, email, password, birthday, gender });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Doğum Tarihiniz ve Cinsiyet</Text>

        {/* Doğum Tarihi Seçimi */}
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
          placeholder="Doğum tarihi (GG/AA/YYYY)"
          placeholderTextColor="#aaa"
        />

        {/* Cinsiyet Seçimi */}
        <TouchableOpacity style={styles.input} onPress={() => setGender(gender === 'Kadın' ? 'Erkek' : 'Kadın')}>
          <Text style={gender ? styles.inputText : styles.placeholderText}>
            {gender || 'Cinsiyet seçin'}
          </Text>
        </TouchableOpacity>

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
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#1e1e1e',
  },
  inputText: {
    color: 'white',
    fontSize: 16,
  },
  placeholderText: {
    color: '#aaa',
    fontSize: 16,
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
