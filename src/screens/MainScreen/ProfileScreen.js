import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = (width - 8 * 5) / 3;
const TABS = [
  { name: "Gönderiler", icon: "photo-library" },  // Gönderiler için ikon
  { name: "Reels", icon: "video-library" },      // Reels için ikon
  { name: "Etkinlikler", icon: "event" },        // Etkinlikler için ikon
  { name: "Hobiler", icon: "sports-kabaddi" },   // Hobiler için ikon
];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Gönderiler");

  const renderTabContent = () => {
    let images = [];
    if (activeTab === "Gönderiler") {
      images = new Array(9).fill("https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e");
    } else if (activeTab === "Reels") {
      images = new Array(9).fill("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05");
    } else if (activeTab === "Etkinlikler") {
      images = new Array(9).fill("https://images.unsplash.com/photo-1485206412256-701ccc5b93ca");
    } else if (activeTab === "Hobiler") {
      images = new Array(9).fill("https://images.unsplash.com/photo-1517340392432-54a847f30a73");
    }

    return (
      <View style={styles.content}>
        {images.map((url, index) => (
          <Image key={index} source={{ uri: url }} style={styles.contentImage} />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.backgroundImageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca",
          }}
          style={styles.backgroundImage}
        />
        <TouchableOpacity style={styles.settingsIcon}>
          <MaterialIcons name="settings" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca" }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.profileTopInfo}>
          <View style={styles.profileMetric}>
            <Text style={styles.metricValue}>95</Text>
            <Text style={styles.metricLabel}>Puan</Text>
          </View>
          <View style={styles.profileMetric}>
            <Text style={styles.metricValue}>1.5K</Text>
            <Text style={styles.metricLabel}>Takipçi</Text>
          </View>
          <View style={styles.profileMetric}>
            <Text style={styles.metricValue}>200</Text>
            <Text style={styles.metricLabel}>Takip</Text>
          </View>
        </View>

        <View style={styles.profileBottomInfo}>
          <Text style={styles.name}>Ahmet Yılmaz</Text>
          <Text style={styles.username}>@ahmetyilmaz</Text>
          <Text style={styles.bio}>Yazılımcı • Kitapsever • Müzik tutkunu 🎧</Text>

          <View style={styles.tagsContainer}>
            {['#Yazılım', '#Kitap', '#Müzik', '#Kamp', '#Fitness'].map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, activeTab === tab.name && styles.activeTab]}
            onPress={() => setActiveTab(tab.name)}
          >
            <MaterialIcons
              name={tab.icon}
              size={30}
              color={activeTab === tab.name ? "#000" : "#888"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {renderTabContent()}

      {/* Alt boşluk */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImageContainer: {
    height: 240,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  settingsIcon: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 30,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -70,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#fff",
  },
  profileInfo: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileTopInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  profileMetric: {
    alignItems: "center",
  },
  metricValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  metricLabel: {
    fontSize: 14,
    color: "#888",
  },
  profileBottomInfo: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  username: {
    fontSize: 16,
    color: "#666",
    marginVertical: 4,
  },
  bio: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 4,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  tagText: {
    fontSize: 13,
    color: "#333",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#000",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4,
    justifyContent: "space-between",
    paddingBottom: 200,
  },
  contentImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE * 1.5,
    borderRadius: 12,
    margin: 4,
  },
});

export default ProfileScreen;
