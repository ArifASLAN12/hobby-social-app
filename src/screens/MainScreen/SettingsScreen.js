import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.inner}>
        {/* Ayarlar Başlığı */}
        <Text style={styles.headerTitle}>Ayarlar</Text>

        {/* Profil Ayarları */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Profil Ayarları</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Profil Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Şifre Değiştir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View> {/* Ayırıcı çizgi */}

        {/* Kaydedilenler */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Kaydedilenler</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Kaydedilen Gönderiler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Kaydedilen Videolar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Arşiv */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Arşiv</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Arşivli Gönderiler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Arşivli Hikayeler</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Hareketler */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Hareketler</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Hareket Geçmişi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Bildirimler */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Bildirimler</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Tüm Bildirimler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Etkinlik Bildirimleri</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Zaman Yönetimi */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Zaman Yönetimi</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Bildirim Zamanları</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Uygulama Süresi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Etkinlik Yönetimi */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Etkinlik Yönetimi</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Etkinlik Planı</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* İçerikleri Kimler Görebilir */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>İçerikleri Kimler Görebilir</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Hesap Gizliliği</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Yakın Arkadaşlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Engellenenler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Hikaye Etkinlik Canlı Yayın Gizle</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}></View>

        {/* Etkileşim Ayarları */}
        <View style={styles.optionSection}>
          <Text style={styles.sectionTitle}>Etkileşim Ayarları</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Hikaye Cevapları</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Gönderi Yorumları</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E28', // Arka plan rengi
  },
  inner: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#0A0E28', // İç alan rengi
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  optionSection: {
    marginBottom: 20, // Her bölüm arasında boşluk bırak
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#2F3A57',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#444D6B', // İnce çizgi
    marginVertical: 15,
  },
});

export default SettingsScreen;
