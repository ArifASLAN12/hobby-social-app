import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/profile/Header";
import UserStats from "../../components/profile/UserStats";
import HobbyTags from "../../components/profile/HobbyTags";
import BioSection from "../../components/profile/BioSection";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <HobbyTags />
      <BioSection />
      <UserStats />
    </ScrollView>
  );
};

export default ProfileScreen;
