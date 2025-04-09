import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Share, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isOwnProfile }) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal görünürlüğünü kontrol et
  const profileLink = 'https://example.com/profil/jokerhanim'; // Profil linki

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const goToEditProfile = () => {
    navigation.navigate('Edit');
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // Modal'ı aç/kapat
  };

  const shareProfile = async () => {
    try {
      await Share.share({
        message: `Check out this profile: ${profileLink}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const copyLink = async () => {
    try {
      await Linking.openURL(`sms:&body=${profileLink}`); // Linki kopyalama işlevselliği (SMS ile göndermeyi simüle eder)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverWrapper}>
        <Image
          source={{ uri: 'https://picsum.photos/800/300' }}
          style={styles.coverPhoto}
        />
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.profilePhoto}
        />
        <Text style={styles.fullName}>Joker Hanım</Text>
        <Text style={styles.username}>@jokerhanim</Text>

        <View style={styles.buttonGroup}>
          {!isOwnProfile ? (
            <>
              <ProfileButton
                backgroundColor="#333"
                iconName="create-outline"
                text="Profili Düzenle"
                onPress={goToEditProfile}
              />
              <ProfileButton
                backgroundColor="#42b72a"
                iconName="share-social-outline"
                text="Paylaş"
                onPress={toggleModal}
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

      <TouchableOpacity style={styles.settingsIcon} onPress={goToSettings}>
        <Ionicons name="settings-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.separator}></View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Paylaş</Text>
            <TouchableOpacity style={styles.modalButton} onPress={shareProfile}>
              <Text style={styles.modalButtonText}>Sosyal Medyada Paylaş</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={copyLink}>
              <Text style={styles.modalButtonText}>Linki Kopyala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ProfileButton = ({ backgroundColor, iconName, text, onPress }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
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
    backgroundColor: '#e0e0e0',
    marginTop: 20,
  },

  // Modal Styles
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#42b72a',
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;
