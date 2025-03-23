import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";  // DrawerNavigator kullanıyoruz
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Step1_Names from "./src/screens/register/Step1_Names";
import Step2_EmailPassword from "./src/screens/register/Step2_EmailPassword";
import Step3_BirthdayGender from "./src/screens/register/Step3_BirthdayGender";
import Step4_PhotoBio from "./src/screens/register/Step4_PhotoBio";
import Home from "./src/screens/HomeScreen";
import Welcome from "./src/screens/WelcomeScreen";
import CategorySelection from "./src/screens/CategorySelectScreen";
import AdminDashboard from "./src/screens/Admin/AdminDashboard";
import AdminLogin from "./src/screens/Admin/Login";
import AdminRegister from "./src/screens/Admin/Register";

// Stack ve Drawer navigators'ı oluşturuyoruz
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="AdminRegister" component={AdminRegister} />
    </Stack.Navigator>
  );
};

// Ana Drawer Navigator'ı
const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home" // Başlangıç ekranı
      screenOptions={{
        headerShown: false, // Başlıkları kaldırıyoruz
        drawerType: "slide", // Yandan açılmasını sağlıyoruz
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="CategorySelection" component={CategorySelection} />
      <Drawer.Screen name="Admin" component={AdminStack} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Step1_Names" component={Step1_Names} />
        <Stack.Screen name="Step2_EmailPassword" component={Step2_EmailPassword} />
        <Stack.Screen name="Step3_BirthdayGender" component={Step3_BirthdayGender} />
        <Stack.Screen name="Step4_PhotoBio" component={Step4_PhotoBio} />
        
        {/* Drawer Navigator'ı burada ekliyoruz */}
        <Stack.Screen name="Drawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
