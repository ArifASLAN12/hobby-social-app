import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const liveStreams = [
  {
    id: "1",
    name: "Elif",
    avatar: "https://i.pravatar.cc/150?img=12",
    streamTitle: "Yoga Başlangıç Seviye",
    streamStatus: "Canlı",
  },
  {
    id: "2",
    name: "Mert",
    avatar: "https://i.pravatar.cc/150?img=15",
    streamTitle: "Fitness Antrenmanı",
    streamStatus: "Canlı",
  },
  {
    id: "3",
    name: "Zeynep",
    avatar: "https://i.pravatar.cc/150?img=18",
    streamTitle: "Fotoğraf Çekim Teknikleri",
    streamStatus: "Başlamak Üzere",
  },
  {
    id: "4",
    name: "Ali",
    avatar: "https://i.pravatar.cc/150?img=16",
    streamTitle: "Kamp Macerası",
    streamStatus: "Canlı",
  },
];

const LiveHobbyStreams = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Canlı Hobi Yayınları</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {liveStreams.map((stream) => (
          <TouchableOpacity key={stream.id} style={styles.streamItem}>
            <Image source={{ uri: stream.avatar }} style={styles.avatar} />
            <Text style={styles.streamTitle}>{stream.streamTitle}</Text>
            <Text style={styles.streamStatus}>{stream.streamStatus}</Text>
            {stream.streamStatus === "Canlı" && (
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Yayına Katıl</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LiveHobbyStreams;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  streamItem: {
    alignItems: "center",
    marginRight: 14,
    width: 100,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  streamTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
  },
  streamStatus: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },
  joinButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#f56",
  },
  joinButtonText: {
    fontSize: 12,
    color: "#fff",
  },
});
