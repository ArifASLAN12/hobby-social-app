import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RefreshNotice = ({ onRefresh, isVisible }) => {
  if (!isVisible) return null; // Eğer bildirim görünür değilse, bileşeni render etme.

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="refresh" size={20} color="#fff" />
        <Text style={styles.text}>Yeni içerikler var! Yenilemek için tıklayın.</Text>
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Text style={styles.refreshText}>Yenile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#27ae60",
    zIndex: 999,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  refreshButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginLeft: 10,
  },
  refreshText: {
    color: "#2ecc71",
    fontWeight: "bold",
  },
});

export default RefreshNotice;
