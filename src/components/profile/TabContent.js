import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3;

const dummyImages = [
  // Örnek görseller — gerçek uygulamada burada kullanıcı gönderileri olacak
  'https://picsum.photos/300/300?random=1',
  'https://picsum.photos/300/300?random=2',
  'https://picsum.photos/300/300?random=3',
  'https://picsum.photos/300/300?random=4',
  'https://picsum.photos/300/300?random=5',
  'https://picsum.photos/300/300?random=6',
];

const TabContent = ({ activeTab }) => {
  return (
    <FlatList
      data={dummyImages}
      numColumns={3}
      keyExtractor={(item, index) => `${activeTab}-${index}`}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
  contentContainer: {
    marginBottom: 200, // Alt boşluk ekledik
  },
});

export default TabContent;
