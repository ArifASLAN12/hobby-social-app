import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const posts = [
  {
    id: "1",
    userName: "Ayşe Yılmaz",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    postImage: "https://source.unsplash.com/random/800x600?nature",
    postText: "Bugün doğada çok güzel bir gün geçirdim! Yoga ve meditasyon yaptım.",
    likes: 50,
    comments: 12,
  },
  {
    id: "2",
    userName: "Mehmet Kılıç",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    postImage: "https://source.unsplash.com/random/800x600?nature",
    postText: "Kamp yapmaya çıktım, doğa harika!",
    likes: 120,
    comments: 45,
  },
  {
    id: "3",
    userName: "Zeynep Arslan",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    postImage: "https://source.unsplash.com/random/800x600?mountain",
    postText: "Müzik dinlemek gibisi yok! Bugün çok güzel bir konser vardı.",
    likes: 85,
    comments: 25,
  },
];

const PostFeed = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.userInfo}>
              <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
              <Text style={styles.userName}>{post.userName}</Text>
            </View>
            <Text style={styles.postText}>{post.postText}</Text>
            {post.postImage && <Image source={{ uri: post.postImage }} style={styles.postImage} />}
            <View style={styles.actions}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="thumbs-up" size={20} color="#888" />
                <Text style={styles.iconText}>{post.likes} Beğen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="comment" size={20} color="#888" />
                <Text style={styles.iconText}>{post.comments} Yorum</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.commentInput}
              placeholder="Yorum yap..."
              placeholderTextColor="#888"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PostFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  postContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 15,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  postText: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  postImage: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginTop: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  commentInput: {
    marginTop: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    fontSize: 14,
    color: "#333",
  },
});
