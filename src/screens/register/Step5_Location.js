import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';  // Konum bilgisi almak için
import userService from '../../services/userService';  // userService'yi ekliyoruz

const Step5_Location = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password, dob, gender, bio, profileImage } = route.params;
  const [locationPermission, setLocationPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Konum izni kontrolü
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
    })();
  }, []);

  const getLocation = async () => {
    if (locationPermission) {
      try {
        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation(userLocation);
      } catch (err) {
        setError('Konum alınırken bir hata oluştu.');
      }
    } else {
      Alert.alert('İzin Gerekiyor', 'Konum bilgisini alabilmek için izin vermelisiniz.');
    }
  };

  const handleFinish = async () => {
    const userData = { username, firstName, lastName, email, password, dob, gender, bio, profileImage, location };

    try {
      await userService.updateUserInfo(userData);  // Backend'e veriyi gönderiyoruz
      navigation.navigate('WelcomeScreen');  // Kullanıcıyı hoş geldiniz ekranına yönlendiriyoruz
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
        <Text style={styles.title}>Konum Bilgisi (Opsiyonel)</Text>

        {locationPermission === null ? (
          <Text style={styles.text}>İzin durumunuz kontrol ediliyor...</Text>
        ) : locationPermission ? (
          <View>
            <Text style={styles.text}>Konum izni verildi!</Text>
            <TouchableOpacity style={styles.button} onPress={getLocation}>
              <Text style={styles.buttonText}>Konumumu Al</Text>
            </TouchableOpacity>
            {location && (
              <Text style={styles.text}>Konum: {location.coords.latitude}, {location.coords.longitude}</Text>
            )}
          </View>
        ) : (
          <Text style={styles.text}>Konum izni verilmedi. Konum bilgisi alınamayacak.</Text>
        )}

        {/* Hata Mesajı */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* Devam Et Butonu */}
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>Tamamla</Text>
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
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
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

export default Step5_Location;
