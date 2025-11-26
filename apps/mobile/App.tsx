import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";

const offlineTicket = {
  id: "bkg-123",
  event: "Bangalore LOL Nights",
  qr: "QR-DATA",
  status: "CONFIRMED",
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12 }}>IndieTix Mobile</Text>
        <View style={{ backgroundColor: "white", padding: 16, borderRadius: 12, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Discover feed</Text>
          <Text style={{ marginTop: 6 }}>Vertical swipes for upcoming events; offline tickets stored locally after purchase.</Text>
          <Text style={{ marginTop: 6, color: "#475569" }}>Control filters: tonight, refund-friendly, Smart Split ready.</Text>
        </View>
        <View style={{ backgroundColor: "white", padding: 16, borderRadius: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Offline ticket</Text>
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
