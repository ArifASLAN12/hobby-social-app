// App.js veya navigation yapısında bu screen'e bağlanmalıdır
import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import FollowingSection from "../components/home/FollowingSection";
import SuggestionBar from "../components/home/SuggestionBar";
import PostFeed from "../components/home/PostFeed";
import SponsoredPostCard from "../components/home/SponsoredPostCard";
import FeedEmptyState from "../components/home/FeedEmptyState";
import AddPostModal from "../components/home/AddPostModal";
import BottomNav from "../components/home/BottomNav";
import HobbyFilterBar from "../components/home/HobbyFilterBar";
import HobbyTrendingTags from "../components/home/HobbyTrendingTags";
import LiveHobbyStreams from "../components/home/LiveHobbyStreams";
import HobbyEventHighlight from "../components/home/HobbyEventHighlight";
import HobbyStoriesHighlight from "../components/home/HobbyStoriesHighlight";
import QuickActionBar from "../components/home/QuickActionBar";
import RefreshNotice from "../components/home/RefreshNotice";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RefreshNotice />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <HobbyStoriesHighlight />
        <FollowingSection />
        <LiveHobbyStreams />
        <HobbyFilterBar />
        <HobbyTrendingTags />
        <QuickActionBar />
        <HobbyEventHighlight />
        <SuggestionBar />
        <PostFeed />
        <SponsoredPostCard />
        <FeedEmptyState />
      </ScrollView>
     
      <BottomNav />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
