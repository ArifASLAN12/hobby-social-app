import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';  // Fotoğraf seçici için
import userService from '../../services/userService';  // userService'yi ekliyoruz

const Step4_PhotoBio = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password, dob, gender } = route.params;
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);  // Seçilen fotoğrafı state'e ekliyoruz
    }
  };

  const handleNext = async () => {
    if (!bio || !profileImage) {
      setError('Profil fotoğrafı ve biyografi zorunludur!');
      return;
    }

    try {
      const userData = { username, firstName, lastName, email, password, dob, gender, bio, profileImage };
      
      // Kullanıcı verilerini backend'e gönderiyoruz
      await userService.updateUserInfo(userData);  // userService üzerinden backend'e gönderim yapıyoruz

      // Başarıyla geçiş yapıyoruz
      navigation.navigate('Step5_Location', { userData });  // Tamamlama ekranına yönlendiriyoruz
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
        <Text style={styles.title}>Profil Fotoğrafı ve Biyografi</Text>

        {/* Profil Fotoğrafı Seçimi */}
        <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.image} />
          ) : (
            <Text style={styles.imageText}>Fotoğraf Seçin</Text>
          )}
        </TouchableOpacity>

        {/* Biyografi Girişi */}
        <TextInput
          style={styles.input}
          placeholder="Biyografi (Hakkında kısa bir şeyler yazın)"
          placeholderTextColor="#aaa"
          value={bio}
          onChangeText={setBio}
          multiline
        />

        {/* Hata Mesajı */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Devam Et Butonu */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Kaydet ve Devam Et</Text>
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
  imagePicker: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#1e1e1e',
    textAlignVertical: 'top',
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

export default Step4_PhotoBio;
