import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Step1_Username from './src/screens/register/Step1_Username';
import Step2_EmailPassword from './src/screens/register/Step2_EmailPassword';
import Step3_BirthdayGender from './src/screens/register/Step3_BirthdayGender';
import Step4_PhotoBio from './src/screens/register/Step4_PhotoBio';
import Home from './src/screens/HomeScreen';
import Welcome from './src/screens/WelcomeScreen';
import CategorySelection from './src/screens/CategorySelectionScreen';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Step1_Username" component={Step1_Username} />
        <Stack.Screen name="Step2_EmailPassword" component={Step2_EmailPassword} />
        <Stack.Screen name="Step3_BirthdayGender" component={Step3_BirthdayGender} />
        <Stack.Screen name="Step4_PhotoBio" component={Step4_PhotoBio} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}