import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });

    const timer = setTimeout(() => {
      fadeOut.start(() => navigation.replace('AdminLogin'));
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}> 
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </Animated.View>
      <Text style={styles.footer}>from Hobii</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 1,
    height: width * 1,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  footer: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    bottom: height * 0.05,
    textAlign: 'center',
    width: '100%',
  },
});

export default SplashScreen;