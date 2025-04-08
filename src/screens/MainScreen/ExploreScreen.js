import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// Bileşenler
import SearchBar from '../../components/explore/SearchBar';
import CategoryList from '../../components/explore/CategoryList';
import TrendingTopics from '../../components/explore/TrendingTopics';
import PostList from '../../components/explore/PostList';
import AdvertisementBanner from '../../components/explore/AdvertisementBanner';
import ActivityIndicator from '../../components/explore/ActivityIndicator';
import BottomNav from "../../components/home/BottomNav";

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Arama Çubuğu */}
      <SearchBar />

      {/* Kategori Listesi */}
      <CategoryList />

      {/* Trend Konular */}
      <TrendingTopics />

      {/* Reklam Alanı */}
      <AdvertisementBanner />

      {/* Paylaşılan Postlar */}
      <PostList />

      {/* Yükleniyor Göstergesi */}
      <ActivityIndicator />
      <BottomNav/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default ExploreScreen;
