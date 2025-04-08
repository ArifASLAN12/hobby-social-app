import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

const hobbyCategories = [
  "Yoga",
  "Fitness",
  "Sanat",
  "Müzik",
  "Yemek Yapma",
  "Koşu",
  "Fotoğraf",
  "Kitap",
  "Kamp",
  "Gezmek",
];

const HobbyFilterBar = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* Arama Kutusu */}
      <TextInput
        style={styles.searchInput}
        placeholder="Hobi Ara"
        value={searchText}
        onChangeText={handleSearchChange}
      />

      {/* Filtreleme Kategorileri */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {hobbyCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HobbyFilterBar;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: 12,
  },
  categoryButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: "#f56",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  selectedCategoryText: {
    color: "#fff",
  },
});
