import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, ScrollView, Text, View } from "react-native";

const offlineTicket = {
  id: "bkg-123",
  event: "Bangalore LOL Nights",
  qr: "QR-DATA",
  status: "CONFIRMED",
};

const feedCards = [
  { title: "Swipe to discover", detail: "Vertical feed with CTA + share + bookmark", color: "#0f172a", text: "white" },
  { title: "Refund friendly", detail: "Organizer-approved refunds surfaced", color: "#ecfeff", text: "#0f172a" },
  { title: "Offline ready", detail: "Tickets cached locally with lock/unlock", color: "#ffedd5", text: "#7c2d12" },
];

export default function App() {
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 1400, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0, duration: 1400, useNativeDriver: true }),
      ])
    ).start();
  }, [pulse]);

  const scale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.02] });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "800", marginBottom: 12 }}>IndieTix Mobile</Text>

        <Animated.View style={{ transform: [{ scale }], backgroundColor: "#0f172a", borderRadius: 16, padding: 16, marginBottom: 16 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>Fast booking</Text>
          <Text style={{ color: "#e2e8f0", marginTop: 6 }}>Swipe feed → tap CTA → checkout in under 60s with UPI intent.</Text>
          <Text style={{ color: "#cbd5e1", marginTop: 6 }}>Smart Split links stay in the booking; refunds pause payouts until approved.</Text>
        </Animated.View>

        <View style={{ gap: 12 }}>
          {feedCards.map((card) => (
            <View key={card.title} style={{ backgroundColor: card.color, borderRadius: 16, padding: 16 }}>
              <Text style={{ color: card.text, fontSize: 18, fontWeight: "700" }}>{card.title}</Text>
              <Text style={{ color: card.text, marginTop: 6 }}>{card.detail}</Text>
            </View>
          ))}
        </View>

        <View style={{ backgroundColor: "white", padding: 16, borderRadius: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Offline ticket</Text>
          <Text style={{ marginTop: 6 }}>{offlineTicket.event}</Text>
          <Text>Status: {offlineTicket.status}</Text>
          <Text selectable style={{ marginTop: 8 }}>QR payload: {offlineTicket.qr}</Text>
          <Text style={{ marginTop: 6, color: "#475569" }}>Refunds are organizer-approved; QR locks automatically if a refund is pending.</Text>
          <Text style={{ marginTop: 6, color: "#475569" }}>Smart Split links stay visible for friends paying their share.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
