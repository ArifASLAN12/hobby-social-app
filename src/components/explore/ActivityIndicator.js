import React from 'react';
import { View, Text, ActivityIndicator as RNActivityIndicator, StyleSheet, Animated } from 'react-native';

const ActivityIndicator = ({ message = "İçerikler yükleniyor...", size = "large", color = "#3b82f6" }) => {
  return (
    <View style={styles.container}>
      <RNActivityIndicator size={size} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default ActivityIndicator;
