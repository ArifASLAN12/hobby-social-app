import React from "react";
import { View, StyleSheet } from "react-native";
import Sidebar from "../../components/Sidebar"; // Sidebar bileşeni

const AdminDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Sidebar navigation={navigation} /> {/* Yalnızca Sidebar bileşeni */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",  // Sidebar ve içerik yan yana olacak
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
});

export default AdminDashboard;
