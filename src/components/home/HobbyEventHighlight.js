import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const events = [
  {
    id: "1",
    title: "Yoga Başlangıç Etkinliği",
    date: "2025-04-15",
    image: "https://i.pravatar.cc/150?img=1",
    description: "Yoga öğrenmek isteyenler için başlangıç seviyesinde bir etkinlik.",
    status: "Yakında",
  },
  {
    id: "2",
    title: "Kamp Macerası",
    date: "2025-04-20",
    image: "https://i.pravatar.cc/150?img=2",
    description: "Doğa ile iç içe bir kamp etkinliği.",
    status: "Canlı",
  },
  {
    id: "3",
    title: "Müzik Dinletisi",
    date: "2025-04-18",
    image: "https://i.pravatar.cc/150?img=3",
    description: "Müzik severler için bir araya geldiğimiz etkinlik.",
    status: "Yakında",
  },
  {
    id: "4",
    title: "Fotoğrafçılık Atölyesi",
    date: "2025-04-22",
    image: "https://i.pravatar.cc/150?img=4",
    description: "Temel fotoğrafçılık bilgilerini öğrenebileceğiniz bir atölye.",
    status: "Canlı",
  },
];

const HobbyEventHighlight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öne Çıkan Etkinlikler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventStatus}>{event.status}</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Katıl</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HobbyEventHighlight;

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
    gap: 12,
  },
  eventCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    width: 220,
    marginRight: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  eventImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  eventTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  eventDate: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },
  eventDescription: {
    marginTop: 6,
    fontSize: 12,
    color: "#555",
  },
  eventStatus: {
    marginTop: 6,
    fontSize: 12,
    color: "#f56",
    fontWeight: "bold",
  },
  joinButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f56",
    alignItems: "center",
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
