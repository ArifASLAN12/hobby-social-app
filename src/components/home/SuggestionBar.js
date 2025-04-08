import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const suggestedHobbies = [
  {
    id: "1",
    title: "Yoga",
    description: "Yoga ile bedeninizi ve ruhunuzu rahatlatın.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    title: "Kamp Yapma",
    description: "Doğada vakit geçirebileceğiniz eğlenceli bir etkinlik.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    title: "Müzik Dinletisi",
    description: "Müzik severler için yeni etkinlikler keşfedin.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    title: "Fotoğrafçılık",
    description: "Fotoğrafçılık dünyasına adım atın ve yeteneklerinizi geliştirin.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const SuggestionBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Önerilen Hobiler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {suggestedHobbies.map((hobby) => (
          <TouchableOpacity key={hobby.id} style={styles.suggestionCard}>
            <Image source={{ uri: hobby.image }} style={styles.suggestionImage} />
            <Text style={styles.suggestionTitle}>{hobby.title}</Text>
            <Text style={styles.suggestionDescription}>{hobby.description}</Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreButtonText}>Daha Fazla</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuggestionBar;

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
  suggestionCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    width: 220,
    marginRight: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  suggestionImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  suggestionTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  suggestionDescription: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },
  learnMoreButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f56",
    alignItems: "center",
  },
  learnMoreButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
