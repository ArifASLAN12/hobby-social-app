import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomNav = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "home" && styles.activeButton,
        ]}
        onPress={() => onTabPress("home")}
      >
        <Icon name="home" size={24} color={activeTab === "home" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "explore" && styles.activeButton,
        ]}
        onPress={() => onTabPress("explore")}
      >
        <Icon name="search" size={24} color={activeTab === "explore" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "events" && styles.activeButton,
        ]}
        onPress={() => onTabPress("events")}
      >
        <Icon name="calendar" size={24} color={activeTab === "events" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "chat" && styles.activeButton,
        ]}
        onPress={() => onTabPress("chat")}
      >
        <Icon name="comments" size={24} color={activeTab === "chat" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "group" && styles.activeButton,
        ]}
        onPress={() => onTabPress("group")}
      >
        <Icon name="users" size={24} color={activeTab === "group" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          activeTab === "courses" && styles.activeButton,
        ]}
        onPress={() => onTabPress("courses")}
      >
        <Icon name="book" size={24} color={activeTab === "courses" ? "#2ecc71" : "#777"} />
      </TouchableOpacity>

      {/* Orta + butonu */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => onTabPress("add")}
      >
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    borderBottomWidth: 3,
    borderBottomColor: "#2ecc71",
  },
  plusButton: {
    backgroundColor: "#2ecc71",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: "50%",
    marginLeft: -30,
    zIndex: 10,
  },
});

export default BottomNav;
