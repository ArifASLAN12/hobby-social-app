import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const SuggestedPeopleScreen = ({ route }) => {
  const { suggestedPeople } = route.params; // Parametreyi alıyoruz

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Önerilen Kişiler</Text>
      <FlatList
        data={suggestedPeople}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.personItem}>
            <Image source={{ uri: item.profilePic }} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.personName}>{item.firstName} {item.lastName}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Takip Et</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E28", // Koyu arka plan rengi
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700", // Daha kalın bir yazı tipi
    color: "#F0F0F0", // Açık renkli başlık
    marginBottom: 20,
    textAlign: "center",
  },
  personItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2134", // Koyu gri arka plan rengi
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 15,
    borderWidth: 3, // Profil resmi etrafında ince kenarlık
    borderColor: "#F0F0F0",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  personName: {
    color: "#F0F0F0", // Açık gri isim rengi
    fontSize: 18,
    fontWeight: "600",
  },
  followButton: {
    backgroundColor: "#FF6A00", // Takip et butonu için dikkat çekici turuncu
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  followButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SuggestedPeopleScreen;
