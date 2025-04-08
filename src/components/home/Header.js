import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Bell } from "lucide-react-native";

const Header = () => {
  const avatarUrl = "https://i.pravatar.cc/150?img=12"; // Örnek avatar URL

  return (
    <View style={styles.container}>
      {/* Sol - Logo */}
      <Text style={styles.logoText}>hobii</Text>

      {/* Sağ - Bildirim & Profil */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color="#111" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarButton}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    letterSpacing: -1,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    borderRadius: 100,
  },
  avatarButton: {
    padding: 4,
    borderRadius: 100,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
