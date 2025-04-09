import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TABS = [
  { name: 'Gönderiler', icon: 'photo-library' },
  { name: 'Reels', icon: 'video-library' },
  { name: 'Etkinlikler', icon: 'event' },
];

const Tab = ({ activeTab, setActiveTab }) => (
  <View style={styles.tabs}>
    {TABS.map((tab) => (
      <TouchableOpacity
        key={tab.name}
        style={[styles.tab, activeTab === tab.name && styles.activeTab]}
        onPress={() => setActiveTab(tab.name)}
      >
        <MaterialIcons
          name={tab.icon}
          size={28}
          color={activeTab === tab.name ? '#1E88E5' : '#888'}
        />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
  },
  tab: {
    alignItems: 'center',
    paddingBottom: 4,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#1E88E5',
  },
});

export default Tab;
