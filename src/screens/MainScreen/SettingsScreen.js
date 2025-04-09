import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Başlık */}
      <Text style={styles.header}>Ayarlar</Text>

      {/* Hesap */}
      <Text style={styles.sectionTitle}>Hesap</Text>
      <SettingItem icon={<Feather name="user" size={20} color="#333" />} label="Profil Bilgileri" onPress={() => navigateTo('EditProfile')} />
      <SettingItem icon={<Feather name="lock" size={20} color="#333" />} label="Şifre Değiştir" onPress={() => {}} />

      {/* Etkileşimler */}
      <Text style={styles.sectionTitle}>Etkileşimlerim</Text>
      <SettingItem icon={<MaterialIcons name="favorite-border" size={20} color="#333" />} label="Beğendiğim Gönderiler" onPress={() => navigateTo('LikedPosts')} />
      <SettingItem icon={<FontAwesome5 name="comment-alt" size={18} color="#333" />} label="Yorum Yaptıklarım" onPress={() => navigateTo('CommentedPosts')} />
      <SettingItem icon={<MaterialIcons name="bookmark-border" size={20} color="#333" />} label="Kaydedilenler" onPress={() => navigateTo('SavedPosts')} />

      {/* Bildirimler */}
      <Text style={styles.sectionTitle}>Bildirimler</Text>
      <SettingItem icon={<Feather name="bell" size={20} color="#333" />} label="Bildirim Ayarları" onPress={() => {}} />

      {/* Yardım ve Diğer */}
      <Text style={styles.sectionTitle}>Diğer</Text>
      <SettingItem icon={<Feather name="info" size={20} color="#333" />} label="Hakkında" onPress={() => {}} />
      <SettingItem icon={<Feather name="log-out" size={20} color="#E53935" />} label="Çıkış Yap" onPress={() => {}} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Sürüm 1.0.0 © 2025 JokerApp</Text>
      </View>
    </ScrollView>
  );
};

const SettingItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 24,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerText: {
    fontSize: 12,
    color: '#AAA',
  },
});

export default SettingScreen;