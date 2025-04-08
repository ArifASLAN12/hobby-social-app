import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const followingData = [
  {
    id: "1",
    name: "Elif",
    avatar: "https://i.pravatar.cc/150?img=12",
    hobbies: ["Yoga", "Müzik", "Sanat"],
  },
  {
    id: "2",
    name: "Mert",
    avatar: "https://i.pravatar.cc/150?img=15",
    hobbies: ["Fitness", "Koşu", "Doğa"],
  },
  {
    id: "3",
    name: "Zeynep",
    avatar: "https://i.pravatar.cc/150?img=18",
    hobbies: ["Fotoğraf", "Gezmek", "Sinema"],
  },
  {
    id: "4",
    name: "Ali",
    avatar: "https://i.pravatar.cc/150?img=16",
    hobbies: ["Kamp", "Felsefe", "Kitap"],
  },
];

const FollowingSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Takip Edilenler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {followingData.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userItem}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.userName}>{user.name}</Text>
            <View style={styles.hobbiesContainer}>
              {user.hobbies.slice(0, 2).map((hobby, index) => (
                <Text key={index} style={styles.hobby}>
                  #{hobby}
                </Text>
              ))}
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Takip Et</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowingSection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  userItem: {
    alignItems: "center",
    marginRight: 14,
    width: 80,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  userName: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  hobbiesContainer: {
    marginTop: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  hobby: {
    fontSize: 10,
    color: "#555",
    marginRight: 4,
  },
  followButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#f56",
  },
  followButtonText: {
    fontSize: 12,
    color: "#fff",
  },
});
