// CategorySelectionScreen.js
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { getCategories, saveSelectedCategories } from '../services/categoryService'; // Servis dosyasını içeri aktar

const CategorySelectionScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const numColumns = 3;

  useEffect(() => {
    // Kategorileri servis üzerinden alıyoruz
    const categoriesData = getCategories();
    setCategories(categoriesData);
  }, []);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const handleNext = () => {
    saveSelectedCategories(selectedCategories); // Kategorileri kaydediyoruz
    navigation.navigate("Home");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategories.includes(item.id) && styles.selectedButton,
      ]}
      onPress={() => toggleCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategories.includes(item.id) && styles.selectedText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İlgi Alanlarınızı Seçin</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
        disabled={selectedCategories.length === 0}
      >
        <Text style={styles.nextText}>Tamamlandı</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  categoryButton: {
    backgroundColor: "#1F1F1F",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 5,
    width: "30%",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#ffffff",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#3B82F6",
  },
  categoryText: {
    fontSize: 13,
    color: "#E5E7EB",
    fontWeight: "600",
  },
  selectedText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  nextButton: {
    backgroundColor: "#3B82F6",
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#ffffff",
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategorySelectionScreen;
