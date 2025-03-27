import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Örnek kullanıcı verisi
const users = [
  { id: '1', name: 'Ahmet Yılmaz', userName: 'ahmet01', email: 'ahmet@example.com', isAdmin: true, createdAt: '2023-03-01' },
  { id: '2', name: 'Murat Kaya', userName: 'murat23', email: 'murat@example.com', isAdmin: false, createdAt: '2025-02-25' },
  { id: '3', name: 'Zeynep Demir', userName: 'zeynep_12', email: 'zeynep@example.com', isAdmin: false, createdAt: '2024-12-15' },
  { id: '4', name: 'Elif Aydın', userName: 'elif.a', email: 'elif@example.com', isAdmin: true, createdAt: '2025-03-20' },
];

const UserList = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Arama fonksiyonu
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase()) ||
      user.email.toLowerCase().includes(text.toLowerCase()) ||
      user.userName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Kullanıcıları kayıt tarihine göre sıralama
  const sortedUsers = filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleEdit = (user) => {
    navigation.navigate('AddEditUser', { user });
  };

  const handleDelete = (userId) => {
    Alert.alert(
      'Kullanıcıyı Sil',
      'Bu kullanıcıyı silmek istediğinizden emin misiniz?',
      [
        { text: 'Hayır', style: 'cancel' },
        {
          text: 'Evet',
          onPress: () => {
            const updatedUsers = users.filter(user => user.id !== userId);
            setFilteredUsers(updatedUsers);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleInfo = (user) => {
    navigation.navigate('UserDetail', { user });
  };

  const renderItem = ({ item }) => (
    <View style={[styles.userItem, item.isAdmin && styles.adminUser]}>
      <View style={styles.userInfo}>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userUserName}>{item.userName}</Text>
        </View>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <View style={styles.userActions}>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <Ionicons name="create-outline" size={24} color="#2980b9" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#e74c3c" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInfo(item)}>
          <Ionicons name="information-circle-outline" size={24} color="#2ecc71" />
        </TouchableOpacity>
      </View>
      <Text style={styles.roleText}>{item.isAdmin ? 'Admin' : 'Kullanıcı'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcılar</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Kullanıcı Ara..."
        value={searchText}
        onChangeText={handleSearch}
      />

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Toplam Kullanıcı: {sortedUsers.length}</Text>
        <Text style={styles.statsText}>Admin Sayısı: {sortedUsers.filter(user => user.isAdmin).length}</Text>
      </View>

      <FlatList
        data={sortedUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.userList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding:20,
    backgroundColor: '#F4F6F8',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  userList: {
    marginTop: 10,
  },
  userItem: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  adminUser: {
    borderColor: '#2980b9',
    borderWidth: 2,
  },
  userInfo: {
    flex: 1,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginRight: 12,
  },
  userUserName: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  roleText: {
    fontSize: 14,
    color: '#7f8c8d',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserList;
