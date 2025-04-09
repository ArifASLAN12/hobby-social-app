import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Ekranlar
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Step1_Names from "./src/screens/register/Step1_Names";
import Step2_EmailPassword from "./src/screens/register/Step2_EmailPassword";
import Step3_BirthdayGender from "./src/screens/register/Step3_BirthdayGender";
import Step4_PhotoBio from "./src/screens/register/Step4_PhotoBio";
import Home from "./src/screens/HomeScreen";
import Welcome from "./src/screens/WelcomeScreen";
import CategorySelection from "./src/screens/CategorySelectScreen";

// Admin ekranları
import AdminDashboard from "./src/screens/Admin/AdminDashboard";
import AdminLogin from "./src/screens/Admin/Login";
import AdminRegister from "./src/screens/Admin/Register";
import UserList from "./src/screens/Admin/UserManagement/UserList";
import AddEditUser from "./src/screens/Admin/UserManagement/AddEditUser";
import ComplaintManagement from "./src/screens/Admin/UserManagement/ComplaintManagement";
import UserDetail from "./src/screens/Admin/UserManagement/UserDetail";
import ComplaintDetail from "./src/screens/Admin/UserManagement/ComplaintDetail";

// Diğer sayfalar
import ExploreScreen from "./src/screens/MainScreen/ExploreScreen";
import EventsScreen from "./src/screens/MainScreen/EventsScreen";
import ChatScreen from "./src/screens/MainScreen/ChatScreen";
import GroupScreen from "./src/screens/MainScreen/GroupScreen";
import CoursesScreen from "./src/screens/MainScreen/CoursesScreen";
import ProfileScreen from "./src/screens/MainScreen/ProfileScreen";
import SettingsScreen from "./src/screens/MainScreen/SettingsScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Genel Kullanıcı Akışı */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Step1_Names" component={Step1_Names} />
        <Stack.Screen name="Step2_EmailPassword" component={Step2_EmailPassword} />
        <Stack.Screen name="Step3_BirthdayGender" component={Step3_BirthdayGender} />
        <Stack.Screen name="Step4_PhotoBio" component={Step4_PhotoBio} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />

        {/* Admin Akışı */}
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminRegister" component={AdminRegister} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="AddEditUser" component={AddEditUser} />
        <Stack.Screen name="ComplaintManagement" component={ComplaintManagement} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="ComplaintDetail" component={ComplaintDetail} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
