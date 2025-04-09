import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // useNavigation hook'u

const ProfileHeader = () => {
  const navigation = useNavigation(); // navigation hook'u

  return (
    <>
      {/* Durum Çubuğu (Status Bar) Rengini Değiştirme */}
      <StatusBar barStyle="light-content" backgroundColor="#1D2A44" />

      <View style={styles.profileHeaderContainer}>
        {/* Ayarlar ikonu */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')} // Ayarlar sayfasına yönlendirme
        >
          <MaterialIcons name="settings" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Profil Fotoğrafı */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca",
            }}
            style={styles.avatar}
          />
        </View>

        {/* Profil Detayları */}
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Ahmet Yılmaz</Text>
          <Text style={styles.username}>@ahmetyilmaz</Text>
          <View style={styles.profileMetrics}>
            {["Puan", "Takipçi", "Takip"].map((label, idx) => (
              <View key={idx} style={styles.profileMetric}>
                <Text style={styles.metricValue}>
                  {idx === 0 ? "95" : idx === 1 ? "1.5K" : "200"}
                </Text>
                <Text style={styles.metricLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    position: "relative",
    backgroundColor: "#1D2A44", // Koyu mavi zemin
    paddingVertical: 12,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  settingsButton: {
    position: "absolute",
    top: 8, // Üstten mesafe
    right: 10, // Sağdan mesafe
    padding: 11,
    backgroundColor: "#2F3A57", // Koyu gri zemin
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  avatarContainer: {
    width: 85, // Avatar boyutunu küçültme
    height: 85, // Avatar boyutunu küçültme
    marginRight: 12,
    borderRadius: 42.5, // Yarı çapı küçültme
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 42.5,
  },
  profileDetails: {
    flex: 1,
    paddingTop: 8,
  },
  name: {
    fontSize: 22, // Font boyutunu küçültme
    fontWeight: "700",
    color: "#fff", // Beyaz metin rengi
  },
  username: {
    fontSize: 15, // Font boyutunu küçültme
    color: "#B0B0B0", // Daha açık gri metin rengi
    marginVertical: 5,
  },
  profileMetrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  profileMetric: {
    alignItems: "center",
  },
  metricValue: {
    fontSize: 20, // Font boyutunu küçültme
    fontWeight: "700",
    color: "#fff", // Beyaz metin rengi
  },
  metricLabel: {
    fontSize: 11, // Font boyutunu küçültme
    color: "#B0B0B0", // Daha açık gri metin rengi
  },
});

export default ProfileHeader;
