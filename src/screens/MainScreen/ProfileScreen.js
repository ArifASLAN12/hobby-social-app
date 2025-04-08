import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Alt bileşenler
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileBio from '../components/profile/ProfileBio';
import EditProfileButton from '../components/profile/EditProfileButton';
import HobbyTags from '../components/profile/HobbyTags';
import PostTabs from '../components/profile/PostTabs';
import SettingsButton from '../components/profile/SettingsButton';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Kullanıcı üst bilgileri: avatar, isim, ayarlar */}
      <ProfileHeader />
      
      {/* Ayarlar butonu */}
      <SettingsButton />

      {/* Gönderi, takipçi, takip edilen sayıları */}
      <ProfileStats />

      {/* Kullanıcının kendini tanıttığı yazı */}
      <ProfileBio />

      {/* Profili düzenle butonu */}
      <EditProfileButton />

      {/* Kullanıcının hobileri */}
      <HobbyTags />

      {/* Kullanıcının gönderileri ve etiketlenenler sekmesi */}
      <PostTabs />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
});
