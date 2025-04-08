import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Plus } from "lucide-react-native";

const storiesData = [
  {
    id: "1",
    name: "Sen",
    avatar: "https://i.pravatar.cc/150?img=20",
    isMe: true,
  },
  {
    id: "2",
    name: "Elif",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "3",
    name: "Mert",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "4",
    name: "Zeynep",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "5",
    name: "Ali",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
];

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {storiesData.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyItem}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: story.avatar }} style={styles.avatar} />
              {story.isMe && (
                <View style={styles.plusIcon}>
                  <Plus size={14} color="#fff" />
                </View>
              )}
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {story.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  storyItem: {
    alignItems: "center",
    marginRight: 14,
    width: 60,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#f56",
  },
  plusIcon: {
    position: "absolute",
    bottom: -2,
    right: -2,
    backgroundColor: "#f56",
    borderRadius: 10,
    padding: 2,
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },
});
