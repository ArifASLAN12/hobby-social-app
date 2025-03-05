import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Step7_TermsAndConditions = ({ route, navigation }) => {
  const { username, firstName, lastName, email, password, birthday, gender, bio, profileImage, location } = route.params;

  const handleFinish = () => {
    // Kayıt işlemi tamamlandıktan sonra yapılacak işlemler
    navigation.navigate('Home'); // Giriş ekranına yönlendirme
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Hizmet Şartları ve Gizlilik Politikası</Text>
        <Text style={styles.content}>
          Bu uygulama, kullanıcı verilerini toplar ve kullanır. Kullanıcı, bu verilerin nasıl kullanılacağı hakkında bilgi sahibi olmalıdır.
          Uygulamayı kullanarak, aşağıdaki şartları kabul etmiş olursunuz:
          {"\n\n"}
          1. Kullanıcı verileri, uygulamanın işlevselliğini sağlamak amacıyla toplanır.
          {"\n\n"}
          2. Verileriniz, üçüncü taraflarla paylaşılmayacaktır.
          {"\n\n"}
          3. Gizlilik politikamız hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
          {"\n\n"}
          4. Uygulamayı kullanarak, bu şartları kabul etmiş olursunuz.
        </Text>
        <Text style={styles.agreement}>
          Kullanım şartlarını ve gizlilik politikasını kabul ediyorum.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingTop: 80, // İçeriği biraz daha aşağıya itmek için padding ekleyin
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  agreement: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0095F6',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Step7_TermsAndConditions;