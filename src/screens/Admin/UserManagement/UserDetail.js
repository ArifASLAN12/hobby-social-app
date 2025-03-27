import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const UserDetail = ({ route }) => {
  const { user } = route.params; // Kullanıcı bilgisi parametre olarak alındı

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kullanıcı Detayı</Text>

      {/* Profil Resmi */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoText}><Text style={styles.bold}>Username:</Text> {user.userName}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Ad:</Text> {user.firstName}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Soyad:</Text> {user.lastName}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>E-posta:</Text> {user.email}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Doğum Tarihi:</Text> {new Date(user.dob).toLocaleDateString()}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Cinsiyet:</Text> {user.gender}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Biyografi:</Text> {user.bio}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Kayıt Tarihi:</Text> {new Date(user.createdAt).toLocaleDateString()}</Text>
        <Text style={styles.infoText}><Text style={styles.bold}>Konum:</Text> {user.location}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Üstten biraz daha az boşluk
    paddingHorizontal: 20,
    backgroundColor: '#F4F6F8',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2980b9',
    marginBottom: 15,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  infoSection: {
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 12,
    lineHeight: 20,
    fontFamily: 'Arial',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 10,
    shadowColor: '#dcdcdc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  bold: {
    fontWeight: '700',
    color: '#2980b9',
  }
});

export default UserDetail;
