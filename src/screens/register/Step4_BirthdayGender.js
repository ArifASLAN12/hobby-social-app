import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Step4_BirthdayGender = ({ route, navigation }) => {
  const { username, email, password } = route.params;
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleNext = () => {
    navigation.navigate('Step5_PhotoBio', { username, email, password, birthday, gender });
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
      />
      <TextInput
        style={styles.input}
        placeholder="Cinsiyet"
        placeholderTextColor="#aaa"
        value={gender}
        onChangeText={setGender}
        autoCapitalize="none"
      />
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
});

export default Step4_BirthdayGender;