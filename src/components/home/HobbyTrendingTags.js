import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const trendingTags = [
  "#Yoga",
  "#Fitness",
  "#Müzik",
  "#Kamp",
  "#Doğa",
  "#Fotoğraf",
  "#Sanat",
  "#Mutfak",
  "#Kitap",
  "#Koşu",
];

const HobbyTrendingTags = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trend Hobiler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {trendingTags.map((tag, index) => (
          <TouchableOpacity key={index} style={styles.tagButton}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HobbyTrendingTags;

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
    gap: 12,
  },
  tagButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
});
