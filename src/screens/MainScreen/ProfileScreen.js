import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileHeader from '../../components/profile/ProfileHeader';
import Bio from '../../components/profile/Bio';
import ActionButtons from '../../components/profile/ActionButtons';
import Tab from '../../components/profile/Tab';
import TabContent from '../../components/profile/TabContent'; // Yeni içerik bileşeni
import BottomNav from '../../components/home/BottomNav'; // BottomNav bileşeni

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Gönderiler');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <ProfileHeader />
          <Bio />
          <ActionButtons isOwnProfile={true} />
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        <TabContent activeTab={activeTab} />
      </ScrollView>
      <BottomNav /> {/* BottomNav sabit olarak yerleştirildi */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E28', // Çok koyu mavi (0A0E28)
    position: 'relative', // Bu, BottomNav'in alt kısmı sabit konumda olması için gerekli
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 70, // BottomNav'in yüksekliği kadar alan bırakıyoruz
  },
  inner: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#0A0E28', // Çok koyu mavi iç alan
  },
});

export default ProfileScreen;
