import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  'Hepsi',
  'Fotoğrafçılık',
  'Müzik',
  'Yemek',
  'Seyahat',
  'Oyun',
  'Fitness',
  'Kodlama',
  'Kitap',
  'Sanat',
  'Moda',
  'Hayvanlar',
];

const CategoryList = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const handleSelect = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  const renderItem = ({ item }) => {
    const isActive = item === selectedCategory;

    return (
      <TouchableOpacity onPress={() => handleSelect(item)} style={[styles.chip, isActive && styles.activeChip]}>
        <Text style={[styles.chipText, isActive && styles.activeChipText]}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    color: '#555',
  },
  activeChip: {
    backgroundColor: '#3b82f6',
  },
  activeChipText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryList;
