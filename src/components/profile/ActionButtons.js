import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // useNavigation import

const ActionButtons = ({ isOwnProfile }) => {
  const navigation = useNavigation(); // useNavigation hook'unu kullanarak navigation nesnesine erişim sağlıyoruz

  // Önerilen kişilerin listesi
  const suggestedPeople = [
    {
      id: "1",
      firstName: "Arife",
      lastName: "Aslan",
      profilePic:
        "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca",
    },
    {
      id: "2",
      firstName: "Ayşe",
      lastName: "Kaya",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "3",
      firstName: "Mehmet",
      lastName: "Demir",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "4",
      firstName: "Ali",
      lastName: "Çelik",
      profilePic:
        "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca",
    },
    {
      id: "5",
      firstName: "Ayşe",
      lastName: "Şahin",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "6",
      firstName: "Mehmet",
      lastName: "Kaya",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "7",
      firstName: "Ali",
      lastName: "Akın",
      profilePic:
        "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca",
    },
    {
      id: "8",
      firstName: "Ayşe",
      lastName: "Turan",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "9",
      firstName: "Mehmet",
      lastName: "Yılmaz",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <View style={styles.actionButtons}>
      {isOwnProfile ? (
        <>
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={20} color="#fff" />
            <Text style={styles.buttonText}>Profil Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <MaterialIcons name="share" size={20} color="#fff" />
            <Text style={styles.buttonText}>Paylaş</Text>
          </TouchableOpacity>

          {/* Önerilen Kişiler Butonu */}
          <TouchableOpacity
            style={styles.suggestedPeopleButton}
            onPress={() =>
              navigation.navigate("SuggestedPeople", { suggestedPeople })
            }
          >
            <MaterialIcons name="people" size={20} color="#fff" />
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.profileActions}>
          <TouchableOpacity style={styles.followButton}>
            <MaterialIcons name="person-add" size={20} color="#fff" />
            <Text style={styles.buttonText}>Takip Et</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <MaterialIcons name="message" size={20} color="#fff" />
            <Text style={styles.buttonText}>Mesaj At</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",  // Butonları ortala
    alignItems: "center",
    marginVertical: 16,
    gap: 8,
  },
  profileActions: {
    flexDirection: "row",
    justifyContent: "center",  // Butonları ortala
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: "#0A0E28",
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
    minWidth: 100,
    justifyContent: "center",
  },
  shareButton: {
    backgroundColor: "#0A0E28",
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
    minWidth: 100,
    justifyContent: "center",
  },
  suggestedPeopleButton: {
    backgroundColor: "#0A0E28",
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  followButton: {
    backgroundColor: "#0A0E28",
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
  },
  messageButton: {
    backgroundColor: "#0A0E28",
    borderColor: "#fff",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
  },
});

export default ActionButtons;
