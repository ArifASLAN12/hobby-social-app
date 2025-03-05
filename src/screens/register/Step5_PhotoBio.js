import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const Step5_PhotoBio = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password, birthday, gender } = route.params;
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Fotoğraf erişim izni verilmedi.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleNext = () => {
    navigation.navigate('Step6_TermsAndConditions', {
      username,
      firstName,
      lastName,
      email,
      password,
      birthday,
      gender,
      bio,
      profileImage,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Profil Fotoğrafı Ekle</Text>
      <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.photo} />
        ) : (
          <Ionicons name="camera" size={50} color="#aaa" />
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Kendiniz hakkında bir şeyler yazın..."
        placeholderTextColor="#aaa"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
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
  photoContainer: {
    backgroundColor: '#333',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#222',
    textAlignVertical: 'top',
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

export default Step5_PhotoBio;