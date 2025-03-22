import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AdminAuthService from "../services/adminService";

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await AdminAuthService.register(username, email, password);
      Alert.alert("Başarılı", "Kayıt başarılı, giriş yapabilirsiniz.");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Hata", error.message || "Kayıt başarısız.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Admin Kayıt</Text>
      <TextInput placeholder="Kullanıcı Adı" value={username} onChangeText={setUsername} />
      <TextInput placeholder="E-posta" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Şifre" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Kayıt Ol" onPress={handleRegister} />
      <Button title="Giriş Yap" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Register;
