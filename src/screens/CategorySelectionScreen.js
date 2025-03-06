import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const categories = [
    { id: "1", name: "Müzik" },
    { id: "2", name: "Sinema" },
    { id: "3", name: "Spor" },
    { id: "4", name: "Teknoloji" },
    { id: "5", name: "Sanat" },
    { id: "6", name: "Bilim" },
    { id: "7", name: "Edebiyat" },
    { id: "8", name: "Tarih" },
    { id: "9", name: "Felsefe" },
    { id: "10", name: "Psikoloji" },
    { id: "11", name: "Fotoğrafçılık" },
    { id: "12", name: "Moda" },
    { id: "13", name: "Yemek" },
    { id: "14", name: "Gezi" },
    { id: "15", name: "Hayvanlar" },
    { id: "16", name: "Aile" },
    { id: "17", name: "Çevre" },
    { id: "18", name: "Astronomi" },
    { id: "19", name: "Matematik" },
    { id: "20", name: "Sosyoloji" },
    { id: "21", name: "Hikaye" },
    { id: "22", name: "Tasarım" },
    { id: "23", name: "Yazılım" },
    { id: "24", name: "Oyun" },
    { id: "25", name: "Fizik" },
    { id: "26", name: "Kimya" },
    { id: "27", name: "Biyoloji" },
    { id: "28", name: "Ekonomi" },
    { id: "29", name: "Girişimcilik" },
    { id: "30", name: "Politika" },
    { id: "31", name: "Edebiyat" },
    { id: "32", name: "Şiir" },
    { id: "33", name: "Mimari" },
    { id: "34", name: "Arkeoloji" },
    { id: "35", name: "Sağlık" },
    { id: "36", name: "Seyahat" },
    { id: "37", name: "Yatırım" },
    { id: "38", name: "Eğitim" },
    { id: "39", name: "Sosyal Medya" },
    { id: "40", name: "Kariyer" },
    { id: "41", name: "Doğa" },
    { id: "42", name: "Yaşam" },
    { id: "43", name: "Kültür" },
    { id: "44", name: "Teknolojik İnovasyon" },
    { id: "45", name: "Kişisel Gelişim" },
    { id: "46", name: "İş Dünyası" },
    { id: "47", name: "Web Tasarımı" },
    { id: "48", name: "Gastronomi" },
    { id: "49", name: "Futbol" },
    { id: "50", name: "Basketbol" },
    { id: "51", name: "Yüzme" },
    { id: "52", name: "Kamp" },
    { id: "53", name: "Yoga" },
    { id: "54", name: "Meditasyon" },
    { id: "55", name: "Dijital Pazarlama" },
    { id: "56", name: "Hikayeler" },
    { id: "57", name: "Sahne Sanatları" },
    { id: "58", name: "Tiyatro" },
    { id: "59", name: "Ballet" },
    { id: "60", name: "Meyve" },
    { id: "61", name: "Sebze" },
    { id: "62", name: "Şarap" },
    { id: "63", name: "Kahve" },
    { id: "64", name: "Çay" },
    { id: "65", name: "Vücut Geliştirme" },
    { id: "66", name: "Aromaterapi" },
    { id: "67", name: "Sosyal Hizmetler" },
    { id: "68", name: "Eğlence" },
    { id: "69", name: "Astronomi" },
    { id: "70", name: "Felsefi Konular" },
    { id: "71", name: "Antropoloji" },
    { id: "72", name: "Çalışma Psikolojisi" },
    { id: "73", name: "İnsan Kaynakları" },
    { id: "74", name: "Finans" },
    { id: "75", name: "Borsa" },
    { id: "76", name: "Hukuk" },
    { id: "77", name: "Güvenlik" },
    { id: "78", name: "Tarım" },
    { id: "79", name: "Ziraat" },
    { id: "81", name: "Zeka Oyunları" },
    { id: "82", name: "Felsefe Tarihi" },
    { id: "83", name: "Kişisel İletişim" },
    { id: "84", name: "Yapay Zeka" },
    { id: "85", name: "Makine Öğrenimi" },
    { id: "86", name: "Veri Bilimi" },
    { id: "87", name: "Siber Güvenlik" },
    { id: "88", name: "Kriptografi" },
    { id: "89", name: "E-Ticaret" },
    { id: "90", name: "Blockchain" },
    { id: "91", name: "Robotik" },
    { id: "92", name: "Fiziksel Eğitim" },
    { id: "94", name: "Gıda Teknolojisi" },
    { id: "95", name: "Yapay Zeka Geliştirme" },
  ];
  

const CategorySelectionScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const numColumns = 3; // Sütun sayısını burada tanımlayın

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const handleNext = () => {
    console.log("Seçilen Kategoriler:", selectedCategories);
    navigation.navigate("Home");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategories.includes(item.id) && styles.selectedButton,
      ]}
      onPress={() => toggleCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategories.includes(item.id) && styles.selectedText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İlgi Alanlarınızı Seçin</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // 3 sütun
        key={numColumns}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Home")} // Burada Home ekranına gidiyoruz
        disabled={selectedCategories.length === 0}
      >
        <Text style={styles.nextText}>Tamamlandı</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 5, // Sağ ve sol için daha az boşluk
  },
  categoryButton: {
    backgroundColor: "#1F1F1F",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 5, // Kutular arasındaki boşluk
    width: "30%", // Her bir butonun genişliği ayarlandı
    alignItems: "center",
    elevation: 4,
    shadowColor: "#ffffff",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  selectedButton: {
    backgroundColor: "#3B82F6",
  },
  categoryText: {
    fontSize: 13,
    color: "#E5E7EB",
    fontWeight: "600",
  },
  selectedText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  nextButton: {
    backgroundColor: "#3B82F6",
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#ffffff",
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategorySelectionScreen;
