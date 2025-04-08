import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FeedEmptyState = ({ onRetry }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1574158622681-29f56c93cf85' }} // Unsplash'tan alınan görsel URL'si
        style={styles.emptyImage}
      />
      <Text style={styles.message}>
        Henüz hobilerinizi paylaşan kimse yok.
      </Text>
      <Text style={styles.description}>
        Hobiler hakkında daha fazla içerik görmek için etkileşime geçmeye başlayın.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Icon name="refresh" size={18} color="#fff" />
        <Text style={styles.retryText}>Yeniden Yükle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    flexDirection: "row",
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  retryText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default FeedEmptyState;
