import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import adminService from "./adminService"; // adminService'i doğru import ettik

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
    <View style={{ padding: 20 }}>
      <Text>Admin Giriş</Text>
      <TextInput
        placeholder="E-posta veya Kullanıcı Adı"
        value={identifier}
        onChangeText={setIdentifier}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Button title="Kayıt Ol" onPress={() => navigation.navigate("AdminRegister")} />
    </View>
  );
};

export default Login;
