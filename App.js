import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Step1_Username from './src/screens/register/Step1_Username';
import Step2_FullName from './src/screens/register/Step2_FullName';
import Step3_EmailPassword from './src/screens/register/Step3_EmailPassword';
import Step4_BirthdayGender from './src/screens/register/Step4_BirthdayGender';
import Step5_PhotoBio from './src/screens/register/Step5_PhotoBio';
import Step6_Location from './src/screens/register/Step6_Location';
import Step7_TermsAndConditions from './src/screens/register/Step7_TermsAndConditions';
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
        <Stack.Screen name="Step2_FullName" component={Step2_FullName} />
        <Stack.Screen name="Step3_EmailPassword" component={Step3_EmailPassword} />
        <Stack.Screen name="Step4_BirthdayGender" component={Step4_BirthdayGender} />
        <Stack.Screen name="Step5_PhotoBio" component={Step5_PhotoBio} />
        <Stack.Screen name="Step6_Location" component={Step6_Location} />
        <Stack.Screen name="Step7_TermsAndConditions" component={Step7_TermsAndConditions} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}