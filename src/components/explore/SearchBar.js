import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // veya react-native-vector-icons/Ionicons

const SearchBar = ({ placeholder = "Hobini ara...", onSearch }) => {
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={searchText}
        onChangeText={setSearchText}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />

      {searchText.length > 0 && (
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Ionicons name="close-circle" size={20} color="#aaa" style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 2,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;
