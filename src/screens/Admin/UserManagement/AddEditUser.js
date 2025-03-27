import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// AddEditUser bileşeni
const AddEditUser = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Kullanıcı verisi UserList ekranından geldiğinde durumu güncelle
  useEffect(() => {
    if (route?.params?.user) {
      setFirstName(route.params.user.name.split(' ')[0]); // Adı ve soyadı ayırma
      setLastName(route.params.user.name.split(' ')[1] || ''); // Soyadını ayarlama
      setUserName(route.params.user.name); // Kullanıcı adı
      setUserEmail(route.params.user.email);
      setPassword(''); // Parola alanı boş bırakılabilir
      setIsAdmin(route.params.user.isAdmin);
    }
  }, [route?.params?.user]);

  const handleSave = () => {
    // Güncellenen kullanıcı verisini kaydet
    console.log('Kullanıcı kaydedildi:', { firstName, lastName, userName, userEmail, password, isAdmin });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{route?.params?.user ? 'Kullanıcıyı Düzenle' : 'Kullanıcı Ekle'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={userEmail}
        onChangeText={setUserEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Parola"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.adminContainer}>
        <Text style={styles.adminLabel}>Admin Mi?</Text>
        <TouchableOpacity
          style={[styles.adminButton, isAdmin && styles.adminButtonActive]}
          onPress={() => setIsAdmin(!isAdmin)}
        >
          <Text style={styles.adminButtonText}>{isAdmin ? 'Admin' : 'Kullanıcı'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Üst boşluk eklendi
    backgroundColor: '#ECF0F3',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  adminContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  adminLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
  },
  adminButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    backgroundColor: '#f39c12',
    marginBottom: 20,
  },
  adminButtonActive: {
    backgroundColor: '#2980b9', // Aktifken mavi olur
  },
  adminButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEditUser;
