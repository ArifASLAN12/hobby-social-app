import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // İkonlar için Ionicons kullanıyoruz

const hobbies = [
  'Yürüyüş', 'Kamp', 'Fotoğrafçılık', 'Yemek', 'Oyun', 'Kodlama', 
  'Müzik', 'Kitap', 'Seyahat', 'Yoga', 'Sinema', 'Ballet', 
  'Kuş Gözlemi', 'Resim', 'Tasarım', 'Yüzme', 'Sosyal Medya', 'Gezme'
];

const HobbyTags = () => {
  return (
    <View style={styles.container}>
      {/* Başlık ve İkon */}
      <View style={styles.headingContainer}>
        <Ionicons name="happy-outline" size={24} color="#1877F2" style={styles.icon} />
        <Text style={styles.heading}>HOBİLERİM</Text>
      </View>

      {/* Etiketler */}
      <ScrollView 
        horizontal={false} // Dikey scroll
        style={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.tagsContainer}>
          {hobbies.map((hobby, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{hobby}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Ayırma Çizgisi */}
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16, 
    paddingHorizontal: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8, // İkon ile başlık arasında boşluk
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'flex-start', 
  },
  tag: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 10, // Daha küçük yatay padding
    paddingVertical: 4, // Daha küçük dikey padding
    borderRadius: 20, // Küçültülmüş borderRadius
    marginRight: 6, // Küçültülmüş yatay boşluk
    marginBottom: 6, // Küçültülmüş dikey boşluk
    elevation: 2, // Hafif gölge efekti
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  tagText: {
    color: '#fff', 
    fontWeight: '400', // Font ağırlığını daha hafif yaptık
    fontSize: 10, // Daha küçük yazı boyutu
    textTransform: 'capitalize', 
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0', // Çizgi rengi
    marginTop: 20, // Çizgi ile içerik arasına boşluk bırakma
  },
});

export default HobbyTags;
