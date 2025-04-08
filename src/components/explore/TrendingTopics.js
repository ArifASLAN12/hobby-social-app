import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // veya 'react-native-vector-icons/MaterialIcons'

const trendingData = [
  { id: '1', topic: '#KampHayatı' },
  { id: '2', topic: '#EvdeFitness' },
  { id: '3', topic: '#DroneÇekimleri' },
  { id: '4', topic: '#Gitar' },
  { id: '5', topic: '#DoğaYürüyüşü' },
  { id: '6', topic: '#StreetPhotography' },
  { id: '7', topic: '#YemekTarifleri' },
];

const TrendingTopics = ({ onTopicPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.topicBox} onPress={() => onTopicPress?.(item.topic)}>
      <MaterialIcons name="local-fire-department" size={18} color="#f87171" />
      <Text style={styles.topicText}>{item.topic}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trend Hobiler</Text>
      <FlatList
        data={trendingData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  topicBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fee2e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  topicText: {
    marginLeft: 6,
    color: '#b91c1c',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default TrendingTopics;
