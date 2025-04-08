import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Bell } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const avatarUrl = "https://i.pravatar.cc/150?img=12"; // Örnek avatar

  const goToProfile = () => {
    navigation.navigate("Profile"); // Stack navigator'da bu isme sahip ekran olmalı
  };

  return (
    <View style={styles.container}>
      {/* Sol - Logo */}
      <Text style={styles.logoText}>hobii</Text>

      {/* Sağ - Bildirim ve Profil */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color="#111" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.avatarButton} onPress={goToProfile}>
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
    alignItems: "center",
    gap: 16,
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
