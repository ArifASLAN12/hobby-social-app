import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";  // Yönlendirme için gerekli

const ComplaintManagement = () => {
  const navigation = useNavigation();  // React Navigation hook'u
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      reportedBy: "ahmet123",
      reportedUser: "mehmet456",
      reason: "Hakaret içerikli mesaj",
      status: "Beklemede",
    },
    {
      id: 2,
      reportedBy: "fatma789",
      reportedUser: "ali654",
      reason: "Spam paylaşım",
      status: "Beklemede",
    },
    {
      id: 3,
      reportedBy: "zeynep222",
      reportedUser: "veli333",
      reason: "Rahatsız edici davranış",
      status: "Beklemede",
    },
  ]);

  const blockUser = (user, duration) => {
    Alert.alert(
      "Hesap Engellendi",
      `${user} adlı kullanıcı ${duration} gün boyunca engellendi.`,
      [{ text: "Tamam" }]
    );
    updateComplaintStatus(user, `${duration} Gün Engellendi`);
  };

  const deleteUser = (user) => {
    Alert.alert(
      "Hesap Silindi",
      `${user} adlı kullanıcının hesabı kalıcı olarak silindi.`,
      [{ text: "Tamam" }]
    );
    updateComplaintStatus(user, "Kalıcı Olarak Silindi");
  };

  const updateComplaintStatus = (reportedUser, newStatus) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.reportedUser === reportedUser
          ? { ...complaint, status: newStatus }
          : complaint
      )
    );
  };

  const renderComplaint = ({ item }) => (
    <View style={styles.complaintCard}>
      <Text style={styles.userText}>
        <Text style={styles.bold}>Şikayet Eden:</Text> {item.reportedBy}
      </Text>
      <Text style={styles.userText}>
        <Text style={styles.bold}>Şikayet Edilen:</Text> {item.reportedUser}
      </Text>
      <Text style={styles.reasonText}>
        <Text style={styles.bold}>Sebep:</Text> {item.reason}
      </Text>
      <Text style={styles.status}>
        <Text style={styles.bold}>Durum:</Text> {item.status}
      </Text>

      {item.status === "Beklemede" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.blockButton]}
            onPress={() => blockUser(item.reportedUser, 7)}
          >
            <Text style={styles.buttonText}>7 Gün</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.blockButton]}
            onPress={() => blockUser(item.reportedUser, 30)}
          >
            <Text style={styles.buttonText}>30 Gün</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => deleteUser(item.reportedUser)}
          >
            <Text style={styles.buttonText}>Kalıcı Sil</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Şikayet kartına tıklandığında detay sayfasına yönlendir */}
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate("ComplaintDetail", { complaint: item })}
      >
        <Text style={styles.buttonText}>Detayları Gör</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Şikayet Yönetimi</Text>
      <FlatList
        data={complaints}
        renderItem={renderComplaint}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 15,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  complaintCard: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  reasonText: {
    fontSize: 14,
    color: "#d9534f",
    fontStyle: "italic",
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0275d8",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 3,
  },
  blockButton: {
    backgroundColor: "#f0ad4e",
  },
  deleteButton: {
    backgroundColor: "#d9534f",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detailButton: {
    marginTop: 10,
    backgroundColor: "#0275d8",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});

export default ComplaintManagement;
