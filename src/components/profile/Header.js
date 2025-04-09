import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // navigation için hook

const Header = ({ isOwnProfile }) => {
  const navigation = useNavigation(); // navigation hook'u

  const goToSettings = () => {
    navigation.navigate('SettingsScreen'); // Ayarlar sayfasına yönlendirme
  };

  return (
    <View style={styles.container}>
      {/* Kapak Fotoğrafı */}
      <View style={styles.coverWrapper}>
        <Image
          source={{ uri: 'https://picsum.photos/800/300' }}
          style={styles.coverPhoto}
        />
      </View>

      {/* Profil Bölümü */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.profilePhoto}
        />
        <Text style={styles.fullName}>Joker Hanım</Text>
        <Text style={styles.username}>@jokerhanim</Text>

        {/* Butonlar */}
        <View style={styles.buttonGroup}>
          {!isOwnProfile ? (
            <>
              <ProfileButton
                backgroundColor="#B0B3B8" // Daha koyu arka plan
                iconName="create-outline"
                text="Profili Düzenle"
              />
              <ProfileButton
                backgroundColor="#42b72a"
                iconName="share-social-outline"
                text="Paylaş"
              />
            </>
          ) : (
            <>
              <ProfileButton
                backgroundColor="#1877F2"
                iconName="person-add-outline"
                text="Takip Et"
              />
              <ProfileButton
                backgroundColor="#42b72a"
                iconName="chatbubbles-outline"
                text="Mesaj"
              />
            </>
          )}
        </View>
      </View>

      {/* Ayarlar İkonu */}
      <TouchableOpacity style={styles.settingsIcon} onPress={goToSettings}>
        <Ionicons name="settings-outline" size={24} color="#333" />
      </TouchableOpacity>

      {/* Çizgi ile Header ve HobbyTags'ı ayırma */}
      <View style={styles.separator}></View>
    </View>
  );
};

// Reusable ProfileButton component
const ProfileButton = ({ backgroundColor, iconName, text }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={() => {}}>
    <Ionicons name={iconName} size={18} color="#fff" />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 30,
  },
  coverWrapper: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  coverPhoto: {
    width: '100%',
    height: 180,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -40,
    paddingHorizontal: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  fullName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 6,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0', // Çizgi rengi
    marginTop: 20,
  },
});

export default Header;
