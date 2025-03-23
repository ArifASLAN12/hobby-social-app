import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
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
    <View style={{ padding: 20 }}>
      <Text>Admin Kayıt</Text>
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
      <Button title="Giriş Yap" onPress={() => navigation.navigate("AdminLogin")} />
    </View>
  );
};

export default Register;
