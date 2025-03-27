import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Örnek kullanıcı verisi
const users = [
  { id: '1', name: 'Ahmet Yılmaz', email: 'ahmet@example.com' },
  { id: '2', name: 'Murat Kaya', email: 'murat@example.com' },
  { id: '3', name: 'Zeynep Demir', email: 'zeynep@example.com' },
  { id: '4', name: 'Elif Aydın', email: 'elif@example.com' },
];

const UserList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Listeleme</Text>
      <Text style={styles.description}>
        Burada kullanıcıların listesi gösterilecektir.
      </Text>
      <FlatList
        data={users}
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
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  userList: {
    marginTop: 10,
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
});

export default UserList;
