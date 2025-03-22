import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import authService from "../../services/authService";

const Step2_EmailPassword = ({ route, navigation }) => {
  const { username } = route.params; // Sadece username alınıyor
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNext = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("E-posta ve şifre boş olamaz!");
      return;
    }

    try {
      const userData = { username, email, password };
      await authService.register(userData);
      navigation.navigate("Step4_BirthdayGender", {
        username,
        email,
        password,
      });
    } catch (err) {
      setError("Kayıt sırasında bir hata oluştu!");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>E-posta ve Şifre Girin</Text>

        <TextInput
          style={styles.input}
          placeholder="E-posta"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        Bir hesap oluşturarak,{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
          Şartlar ve Gizlilik Politikası
        </Text>{' '}
        ile aynı fikirde olduğunuzu kabul etmiş olursunuz.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  content: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "white",
    backgroundColor: "#1e1e1e",
  },
  button: {
    backgroundColor: "#0095F6",
    borderRadius: 12,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  termsText: {
    color: "#bbb",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: "#0095F6",
    fontWeight: "bold",
  },
});

export default Step2_EmailPassword;
