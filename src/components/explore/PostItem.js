import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

const PostItem = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.card}>
      {/* Kullanıcı Bilgisi */}
      <View style={styles.userInfo}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      {/* Post Görseli */}
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />

      {/* Etkileşim Butonları */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={24}
              color={isLiked ? '#e11d48' : '#111'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={22} color="#111" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={22} color="#111" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleSave}>
          <FontAwesome
            name={isSaved ? 'bookmark' : 'bookmark-o'}
            size={22}
            color="#111"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Beğeni Sayısı */}
      <Text style={styles.likes}>{likes} beğeni</Text>

      {/* Açıklama */}
      <Text style={styles.description}>
        <Text style={styles.username}>{post.username} </Text>
        {post.description}
      </Text>

      {/* Zaman Bilgisi */}
      <Text style={styles.timestamp}>{post.timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: '#111',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 280,
    backgroundColor: '#ccc',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 14,
  },
  likes: {
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginBottom: 4,
  },
  description: {
    marginHorizontal: 12,
    marginBottom: 6,
    color: '#333',
  },
  timestamp: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
});

export default PostItem;
