import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import userService from '../services/userService'; // Servisi import et

const WelcomeScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Kullanıcı profilini servisten al
    const fetchUserProfile = async () => {
      try {
        const profileData = await userService.getUserProfile(); // Kullanıcı profili alınır
        setUserProfile(profileData); // Profil verilerini state'e kaydet
      } catch (error) {
        setError('Kullanıcı verisi alınırken bir hata oluştu.');
      } finally {
        setLoading(false); // Yükleme tamamlandı
      }
    };

    fetchUserProfile();

    const timer = setTimeout(() => {
      navigation.navigate('CategorySelection'); // Ana ekrana yönlendir
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcomeText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcomeText}>{error}</Text>
      </View>
    );
  }

  // Profil verisi yoksa bu durumda fallback mesajı göster
  if (!userProfile) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcomeText}>Profil bilgileri mevcut değil.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
        source={require('../../assets/logo.png')} // Hobi logosu
        style={styles.logo} 
      />
      <View style={styles.content}>
        <Image 
          source={{ uri: userProfile.profilePicture || require('../../assets/profile.png') }} // Profil fotoğrafı
          style={styles.profileImage} 
        />
        <Text style={styles.welcomeText}>Hobiiye hoş geldin, {userProfile.name || 'Nazlı'}</Text>
        <Text style={styles.subText}>{userProfile.email}</Text> {/* E-posta adresini göster */}
        <Text style={styles.subText}>Deneyiminizi özelleştirmeye başlayalım</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#aaaaaa',
    fontSize: 16,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
