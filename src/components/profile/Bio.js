import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bio = () => (
  <View style={styles.bioContainer}>
    <Text style={styles.bioText}>
      Yazılımcı • Kitapsever • Müzik tutkunu 🎧 Yazılım geliştirme dünyasında
      her gün yeni bir şey öğrenmekten keyif alıyorum. Teknolojiye olan ilgim,
      beni derinlemesine bilgi edinmeye ve problem çözme yeteneklerimi
      geliştirmeye itti.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  bioContainer: {
    marginTop: 6, // Üst boşluk biraz küçültüldü
    marginBottom: 14, // Alt boşluk biraz küçültüldü
    paddingHorizontal: 14, // Yatay padding küçültüldü
    paddingVertical: 8, // Dikey padding küçültüldü
    backgroundColor: "#1D2A44", // Header ile uyumlu koyu mavi arka plan
    borderRadius: 16, // Köşe yuvarlaması küçültüldü
    shadowColor: "#000",
    shadowOpacity: 0.1, // Gölge etkisi hafifletildi
    shadowRadius: 8, // Gölge etkisi hafifletildi
    elevation: 2, // Gölge etkisi hafifletildi
  },
  bioText: {
    fontSize: 12, // Font boyutu küçültüldü
    fontWeight: "400", // Yazı kalınlığı aynı
    color: "#fff", // Beyaz metin rengi
    textAlign: "center",
    lineHeight: 16, // Satır yüksekliği küçültüldü
    letterSpacing: 0.2, // Harf aralıkları daraltıldı
  },
});

export default Bio;
