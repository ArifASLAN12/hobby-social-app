import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SponsoredPostCard = ({ post }) => {
  // Eğer post undefined veya null ise, boş bir nesne kullanıyoruz
  const { image, title, description } = post || {};

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.sponsoredText}>Sponsorlu</Text>
      </View>
      <View style={styles.cardBody}>
        {/* Eğer image mevcutsa, Image bileşenini render et */}
        {image ? (
          <Image source={{ uri: image }} style={styles.postImage} />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>Görsel Yüklenemedi</Text>
          </View>
        )}
        {/* Eğer title mevcutsa render et */}
        {title ? (
          <Text style={styles.postTitle}>{title}</Text>
        ) : (
          <Text style={styles.postTitle}>Başlık Yüklenemedi</Text>
        )}
        {/* Eğer description mevcutsa render et */}
        {description ? (
          <Text style={styles.postDescription}>{description}</Text>
        ) : (
          <Text style={styles.postDescription}>Açıklama Yüklenemedi</Text>
        )}
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.likeButton}>
          <Icon name="thumbs-up" size={20} color="#fff" />
          <Text style={styles.likeText}>Beğen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Daha Fazla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 15,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardHeader: {
    marginBottom: 10,
    alignItems: "flex-start",
  },
  sponsoredText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#e74c3c",
    backgroundColor: "#f1f1f1",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  cardBody: {
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  noImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  noImageText: {
    color: "#ccc",
    fontSize: 16,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#333",
  },
  postDescription: {
    fontSize: 14,
    color: "#777",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f56",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  likeText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default SponsoredPostCard;
