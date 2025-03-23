import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import adminService from "../../services/adminService"; // adminService'yi doğru import ettik

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Admin kayıt işlemi
      const response = await adminService.register(username, email, password); // adminService üzerinden kayıt işlemi
      if (response) {
        Alert.alert("Başarılı", "Kayıt başarılı, giriş yapabilirsiniz.");
        navigation.navigate("Login"); // Başarılı kayıt sonrası giriş ekranına yönlendirme
      }
    } catch (error) {
      Alert.alert("Hata", error.message || "Kayıt başarısız.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      
      <Text style={styles.title}>Admin Kayıt</Text>

      {/* Kullanıcı Adı */}
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      {/* E-posta */}
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Şifre */}
      <TextInput
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      {/* Kayıt Ol Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      {/* Giriş Yap Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate("AdminLogin")}>
        <Text style={styles.footerText}>Zaten bir hesabınız var mı? Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#4CAF50",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default Register;
