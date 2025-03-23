import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import adminService from "../../services/adminService"; // adminService'yi doğru import ettik

const Login = () => {
  const navigation = useNavigation();
  const [identifier, setIdentifier] = useState(""); // Kullanıcı adı veya e-posta
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Admin login işlemi
      const response = await adminService.login(identifier, password); // adminService üzerinden giriş işlemi
      if (response) {
        Alert.alert("Başarılı", "Giriş başarılı, yönlendiriliyorsunuz.");
        navigation.navigate("AdminDashboard"); // Giriş başarılı olduktan sonra AdminDashboard'a yönlendirme
      }
    } catch (error) {
      Alert.alert("Hata", error.message || "Giriş başarısız.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      
      <Text style={styles.title}>Admin Giriş</Text>

      {/* E-posta veya Kullanıcı Adı */}
      <TextInput
        placeholder="E-posta veya Kullanıcı Adı"
        value={identifier}
        onChangeText={setIdentifier}
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

      {/* Giriş Yap Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      {/* Kayıt Ol Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate("AdminRegister")}>
        <Text style={styles.footerText}>Hesabınız yok mu? Kayıt Olun</Text>
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

export default Login;
