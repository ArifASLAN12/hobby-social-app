import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const Step6_Location = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password, birthday, gender, bio, profileImage } = route.params;
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Konum izni verilmedi.');
        setIsLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);
      if (reverseGeocode.length > 0) {
        const { subregion, region, country } = reverseGeocode[0];
        setAddress(`${subregion}, ${region}, ${country}`);
      }
      setIsLoading(false);
    })();
  }, []);

  const handleNext = () => {
    navigation.navigate('Step7_TermsAndConditions', {
      username,
      firstName,
      lastName,
      email,
      password,
      birthday,
      gender,
      bio,
      profileImage,
      location,
      address,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Konum Bilgisi</Text>
      <View style={styles.contentContainer}>
        {errorMsg ? (
          <Text style={styles.errorMsg}>{errorMsg}</Text>
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#0095F6" />
        ) : address ? (
          <Text style={styles.locationText}>Konumunuz: {address}</Text>
        ) : (
          <Text style={styles.errorMsg}>Konum alınırken bir hata oluştu.</Text>
        )}
      </View>
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  errorMsg: {
    color: 'red',
    fontSize: 16,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
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

export default Step6_Location;
