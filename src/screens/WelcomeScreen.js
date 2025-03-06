import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Ana ekran
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
        source={require('../../assets/logo.png')} // Hobi logosu
        style={styles.logo} 
      />
      <View style={styles.content}>
        <Image 
          source={require('../../assets/profile.png')} // Yerel bir görsel
          style={styles.profileImage} 
        />
        <Text style={styles.welcomeText}>Hobiiye hoş geldin, Nazlı</Text>
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