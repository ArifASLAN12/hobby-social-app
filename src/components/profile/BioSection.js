import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // İkonlar için Ionicons kullanıyoruz

const BioSection = () => {
  return (
    <View style={styles.container}>
      {/* Başlık ve İkon */}
      <View style={styles.headingContainer}>
        <Ionicons name="person" size={24} color="#1877F2" style={styles.icon} />
        <Text style={styles.title}>Hakkımda</Text>
      </View>

      <Text style={styles.bioText}>
        Merhaba! Ben Joker Hanım. Yeni insanlarla tanışmayı, hobilerimi paylaşmayı ve öğrenmeyi seviyorum.
        Hobilerim arasında yürüyüş, doğa gezileri ve kod yazmak var.
      </Text>

      {/* Ayırma Çizgisi */}
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',  // Beyaz arka plan
    paddingHorizontal: 16,     // Yatay padding ekledik
    paddingVertical: 20,      // Dikey padding
    marginBottom: 20,         // Alt boşluk
  },
  headingContainer: {
    flexDirection: 'row', // Başlık ve ikon yatayda hizalanacak
    alignItems: 'center', // İkon ve başlık dikeyde hizalanacak
    marginBottom: 12,     // Başlık ve metin arasındaki boşluk
  },
  icon: {
    marginRight: 8, // İkon ile başlık arasında boşluk
  },
  title: {
    fontSize: 22,             // Başlık boyutunu artırdık
    fontWeight: '600',        // Kalın yazı
    color: '#333',            // Koyu gri başlık rengi
    textTransform: 'uppercase', // Başlığı büyük harf yapma
  },
  bioText: {
    fontSize: 15,             // Metin boyutunu biraz büyüttük
    color: '#555',            // Hafif gri metin rengi
    lineHeight: 22,           // Satır yüksekliği arttırıldı
    textAlign: 'left',        // Sol hizalama
    letterSpacing: 0.4,       // Harfler arası boşluk
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0', // Çizgi rengi
    marginTop: 20,            // Çizgi ve içerik arasına boşluk
  },
});

export default BioSection;
