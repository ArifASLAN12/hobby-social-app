import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // veya react-native-vector-icons

const AdvertisementBanner = () => {
  const ad = {
    imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4', // Görsel linki
    title: 'Kamp Ekipmanlarında %30 İndirim!',
    description: 'Sadece bu hafta! Outdoor ürünlerde büyük fırsatları kaçırma.',
    link: 'https://outdoor-market.example.com',
  };

  const openAdLink = () => {
    Linking.openURL(ad.link);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openAdLink} activeOpacity={0.9}>
      <Image source={{ uri: ad.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.adLabel}>
          <MaterialIcons name="campaign" size={16} color="#fff" />
          <Text style={styles.adText}>Sponsorlu</Text>
        </View>
        <Text style={styles.title}>{ad.title}</Text>
        <Text style={styles.description}>{ad.description}</Text>
        <Text style={styles.linkText}>Daha fazla bilgi</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 12,
  },
  adLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f43f5e',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 6,
  },
  adText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  linkText: {
    color: '#3b82f6',
    fontWeight: '500',
    fontSize: 13,
  },
});

export default AdvertisementBanner;
