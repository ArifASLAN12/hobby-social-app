import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { getCategories } from '../services/categoryService'; // Servis dosyasını içeri aktar

const CategorySelectScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const numColumns = 3;

  // Kategorileri yükle
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await getCategories(); // API'den kategorileri al
        setCategories(fetchedCategories);
      } catch (error) {
        setError("Kategoriler yüklenemedi!");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
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
    if (selectedCategories.length === 0) return;
    // Kategorileri kaydediyoruz
    // saveSelectedCategories(selectedCategories);
    navigation.navigate("Home", { selectedCategories });  // Kategorilerle birlikte Home ekranına geçiş
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.categoryButton, selectedCategories.includes(item.id) && styles.selectedButton]}
      onPress={() => toggleCategory(item.id)}
    >
      <Text style={[styles.categoryText, selectedCategories.includes(item.id) && styles.selectedText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Yükleniyor durumu
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0095F6" />
        <Text style={styles.loadingText}>Kategoriler Yükleniyor...</Text>
      </View>
    );
  }

  // Hata durumu
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => loadCategories()}>
          <Text style={styles.retryButtonText}>Yeniden Dene</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İlgi Alanlarınızı Seçin</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
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
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  categoryButton: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 5,
    width: "30%",
    alignItems: 'center',
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
  loadingText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginTop: 20,
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default CategorySelectScreen;
