import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('@jokerhanim');
  const [fullName, setFullName] = useState('Joker Hanım');
  const [bio, setBio] = useState('Bu benim biyografim!');
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/women/44.jpg');

  const handleSaveChanges = () => {
    // Burada değişiklikler kaydedilebilir
    console.log('Değişiklikler kaydedildi:', { username, fullName, bio });
    navigation.goBack(); // Ekrandan geri dön
  };

  const handleChangeProfileImage = () => {
    // Profil fotoğrafını değiştirmek için bir işlem eklenebilir
    console.log('Profil fotoğrafı değiştirildi');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.header}>Profili Düzenle</Text>

      {/* Profil Fotoğrafı */}
      <View style={styles.profileImageWrapper}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <TouchableOpacity style={styles.changeImageButton} onPress={handleChangeProfileImage}>
          <Ionicons name="camera-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Kullanıcı Adı */}
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />

      {/* Tam İsim */}
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Biyografi */}
      <TextInput
        style={styles.input}
        placeholder="Biyografi"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Kaydet Butonu */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  changeImageButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 5,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#42b72a',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EditProfile;
