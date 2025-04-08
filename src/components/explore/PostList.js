import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostItem from './PostItem';

// Örnek post verisi (API'den çekilebilir)
const samplePosts = [
  {
    id: '1',
    username: 'hobisever_01',
    userAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Doğada kamp yapmanın huzuru bambaşka.',
    likes: 123,
    comments: 7,
    isLiked: false,
    isSaved: false,
    timestamp: '2 saat önce',
  },
  {
    id: '2',
    username: 'gezginadam',
    userAvatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1558981359-4572c1f996d4',
    description: 'Bali sahilleri gerçekten büyüleyiciydi 🌊',
    likes: 340,
    comments: 20,
    isLiked: true,
    isSaved: true,
    timestamp: '5 saat önce',
  },
  // ... daha fazla post
];

const PostList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={samplePosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
        scrollEnabled={false} // ScrollView içinde olacağı için burada false
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default PostList;
