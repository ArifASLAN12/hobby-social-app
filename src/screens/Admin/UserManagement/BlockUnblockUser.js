import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BlockUnblockUser = ({ route, navigation }) => {
  const [isBlocked, setIsBlocked] = useState(route?.params?.user?.isBlocked || false);

  // Kullanıcıyı engelleme veya engelini kaldırma işlemi
  const handleBlockUnblock = () => {
    // Kullanıcıyı engelleme veya engelini kaldırma işlemi yapılır
    setIsBlocked(!isBlocked); // Durumu tersine çevir
    console.log(isBlocked ? 'Kullanıcı engeli kaldırıldı.' : 'Kullanıcı engellendi.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Kullanıcı {isBlocked ? 'Engellendi' : 'Engellenmiş Değil'}
      </Text>

      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          Kullanıcı şu an {isBlocked ? 'engellenmiş' : 'engellenmemiş'} durumda.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isBlocked ? styles.unblockButton : styles.blockButton]}
        onPress={handleBlockUnblock}
      >
        <Text style={styles.buttonText}>
          {isBlocked ? 'Engeli Kaldır' : 'Engelle'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Üstten boşluk
    backgroundColor: '#f4f6f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  infoSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  blockButton: {
    backgroundColor: '#e74c3c', // Engelleme butonu kırmızı
  },
  unblockButton: {
    backgroundColor: '#2ecc71', // Engeli kaldırma butonu yeşil
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BlockUnblockUser;
