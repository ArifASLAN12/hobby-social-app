import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HobbyStoriesHighlight = ({ stories = [], onStoryPress }) => {
  // Eğer stories dizisi boşsa, 'map' fonksiyonu çalışmaz. Burada varsayılan bir boş dizi veriyoruz
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobi Hikayeleri</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Eğer stories dizisi geçerli bir dizi ise, 'map' fonksiyonu çalıştırılır */}
        {Array.isArray(stories) && stories.length > 0 ? (
          stories.map((story, index) => (
            <TouchableOpacity
              key={index}
              style={styles.storyContainer}
              onPress={() => onStoryPress(story)}
            >
              <View style={styles.storyWrapper}>
                <Image
                  source={{ uri: story.avatarUrl }}
                  style={styles.avatar}
                />
                {story.isNew && (
                  <View style={styles.newBadge}>
                    <Icon name="circle" size={10} color="#fff" />
                  </View>
                )}
              </View>
              <Text style={styles.username}>{story.username}</Text>
            </TouchableOpacity>
          ))
        ) : (
          // Eğer stories dizisi boşsa, bir boş mesaj gösterebiliriz
          <Text style={styles.noStoriesText}>Henüz hikaye yok.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  storyContainer: {
    marginRight: 15,
    alignItems: "center",
  },
  storyWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  newBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#e74c3c",
    width: 15,
    height: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    marginTop: 5,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  noStoriesText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
});

export default HobbyStoriesHighlight;
