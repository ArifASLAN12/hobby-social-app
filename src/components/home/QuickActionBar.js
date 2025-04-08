import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const QuickActionBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.buttonText}>Yeni Hobi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.buttonText}>Etkinlik</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="camera" size={20} color="#fff" />
        <Text style={styles.buttonText}>Fotoğraf Paylaş</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="users" size={20} color="#fff" />
        <Text style={styles.buttonText}>Grup Kur</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuickActionBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#f56",
    borderRadius: 10,
    marginTop: 16,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    flexDirection: "column",
    width: 60,
  },
  buttonText: {
    marginTop: 6,
    fontSize: 12,
    color: "#333",
  },
});
