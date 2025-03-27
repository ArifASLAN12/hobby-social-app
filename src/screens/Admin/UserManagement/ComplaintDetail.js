import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";

const ComplaintDetail = ({ route }) => {
  const { complaint } = route.params;  // Şikayet bilgisi
  const [showDetailedInfo, setShowDetailedInfo] = useState(false);  // Detaylı bilgi görünümü durumu

  // Şikayet edilen olayla ilgili detaylı açıklama eklemek
  const getEventDescription = (reason) => {
    switch (reason) {
      case "Hakaret içerikli mesaj":
        return (
          <View style={styles.eventDescriptionContainer}>
            <Text style={styles.eventDescription}>
              Bu şikayet, kullanıcı {complaint.reportedUser}'in, {complaint.reportedBy} adlı kullanıcıya
              hakaret içerikli mesajlar göndermesi üzerine yapılmıştır. Aşağıda, şikayet edilen mesajın örneği
              bulunmaktadır:
            </Text>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                "Sana ne kadar aptalsın, neden bu kadar salaksın?!" {/* Mesaj örneği */}
              </Text>
            </View>
          </View>
        );
      case "Spam paylaşım":
        return (
          <Text style={styles.eventDescription}>
            Bu şikayet, {complaint.reportedUser}'in, {complaint.reportedBy} adlı kullanıcının paylaşımına
            sürekli olarak aynı türde içerikler gönderip spam yapması sonucu yapılmıştır. Yapılan paylaşımlar
            hem kullanıcıyı rahatsız etmiş hem de platformun kullanıcı deneyimini olumsuz etkilemiştir.
          </Text>
        );
      case "Rahatsız edici davranış":
        return (
          <Text style={styles.eventDescription}>
            Bu şikayet, {complaint.reportedUser}'in, {complaint.reportedBy} adlı kullanıcıya rahatsız edici
            mesajlar göndermesi ve sürekli olarak özel mesaj yoluyla taciz etmesi sonucu yapılmıştır. Kullanıcı
            bu davranışlardan rahatsız olmuş ve engellenmesini talep etmiştir.
          </Text>
        );
      default:
        return (
          <Text style={styles.eventDescription}>
            Şikayet edilen olay hakkında daha fazla bilgi bulunmamaktadır. Lütfen platform kurallarına uygun
            şekilde şikayetlerinizi bildirin.
          </Text>
        );
    }
  };

  const handleDetailedInfo = () => {
    setShowDetailedInfo(!showDetailedInfo);  // Detayları göster/gizle
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Şikayet Detayı</Text>

      {/* Şikayet Eden Bilgisi */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Şikayet Eden:</Text>
        <Text style={styles.detail}>{complaint.reportedBy}</Text>
      </View>

      {/* Şikayet Edilen Bilgisi */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Şikayet Edilen:</Text>
        <Text style={styles.detail}>{complaint.reportedUser}</Text>
      </View>

      {/* Şikayet Sebebi */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Sebep:</Text>
        <Text style={styles.reason}>{complaint.reason}</Text>
      </View>

      {/* Şikayet Durumu */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Durum:</Text>
        <Text style={[styles.detail, styles.status(complaint.status)]}>
          {complaint.status}
        </Text>
      </View>

      {/* Olayı İncele Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleDetailedInfo}>
        <Text style={styles.buttonText}>{showDetailedInfo ? "Detayları Gizle" : "Olayı İncele"}</Text>
      </TouchableOpacity>

      {/* Detaylı İnceleme Bölümü */}
      {showDetailedInfo && (
        <View style={styles.detailedInfoContainer}>
          <Text style={styles.label}>Olayın Açıklaması:</Text>
          {getEventDescription(complaint.reason)}

          {/* Eğer mesaj içerikleri varsa, detayları burada gösterebiliriz */}
          {complaint.reason === "Hakaret içerikli mesaj" && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>Şikayet edilen mesaj: "Sana ne kadar aptalsın!"</Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

// Stil düzenlemeleri
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 60,
    padding: 20,
    backgroundColor: "#f9f9f9", // Hafif gri arka plan
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50", // Koyu mavi ton
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34495e", // Koyu gri
  },
  detail: {
    fontSize: 16,
    color: "#2c3e50", // Koyu mavi
    marginBottom: 10,
  },
  reason: {
    fontSize: 16,
    color: "#e74c3c", // Kırmızı
    fontStyle: "italic",
    marginBottom: 10,
  },
  status: (status) => ({
    fontSize: 16,
    color: status === "Beklemede" ? "#f39c12" : "#2ecc71", // Sarı ya da yeşil
    fontWeight: "bold",
  }),
  button: {
    backgroundColor: "#3498db", // Mavi buton
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  detailedInfoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
  },
  eventDescriptionContainer: {
    marginVertical: 15,
  },
  eventDescription: {
    fontSize: 16,
    color: "#7f8c8d", // Açık gri
    marginBottom: 10,
  },
  messageContainer: {
    padding: 10,
    backgroundColor: "#ecf0f1", // Hafif gri arka plan
    borderRadius: 6,
    marginBottom: 15,
  },
  messageText: {
    fontSize: 16,
    color: "#e74c3c", // Kırmızı
    fontWeight: "bold",
  },
  detailContainer: {
    marginBottom: 15,
  },
});

export default ComplaintDetail;
