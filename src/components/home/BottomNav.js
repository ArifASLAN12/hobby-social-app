import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ana Sayfa */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home-outline" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Keşfet */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Explore")}
      >
        <Ionicons name="compass-outline" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Ortadaki + Buton */}
      <TouchableOpacity
        style={styles.centerButton}
        onPress={() => console.log("Yeni gönderi oluştur")}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Events")}
      >
        <MaterialIcons name="event" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Chat */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Chat")}
      >
        <Ionicons name="chatbubbles-outline" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#0A0E28", // Profil ekranı ile uyumlu koyu mavi
    borderTopWidth: 1,
    borderTopColor: "#444", // Profil ekranına uygun koyu sınır
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FF6A00", // Ortadaki + butonunun rengi turuncu
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
  },
});

export default BottomNav;
