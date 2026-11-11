import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const mockResults = [
  { id: "1", title: "Samsung Galaxy S23 Ultra", price: "١٢٠٠$", image: "https://picsum.photos/seed/samsung/120/90", location: "المزة" },
  { id: "2", title: "iPhone 15 Pro Max 256GB", price: "١١٠٠$", image: "https://picsum.photos/seed/iphone/120/90", location: "الميدان" },
  { id: "3", title: "Hyundai Tucson 2020", price: "٨٥٠٠$", image: "https://picsum.photos/seed/car/120/90", location: "اللاذقية" },
  { id: "4", title: "كنب كوفي ١+٢", price: "٨٠٠$", image: "https://picsum.photos/seed/sofa/120/90", location: "الحواجة" },
];

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ backgroundColor: "#fff", padding: 16 }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 15, color: "#2c4a72" }}>← رجوع</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#eee", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10 }}>
          <TextInput
            placeholder="ابحث..."
            value={query}
            onChangeText={setQuery}
            style={{ flex: 1, fontSize: 15, color: "#333", padding: 0 }}
            autoFocus
            dir="rtl"
          />
          <TouchableOpacity style={{ backgroundColor: "#2c4a72", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 }}>
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 13 }}>بحث</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        {mockResults.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push(`/list/${item.id}`)}
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#e5e5e5",
              marginBottom: 10,
            }}
          >
            <Image source={{ uri: item.image }} style={{ width: 100, height: 80, backgroundColor: "#eee" }} contentFit="cover" />
            <View style={{ flex: 1, padding: 10 }}>
              <Text numberOfLines={2} style={{ fontSize: 13, color: "#333" }}>{item.title}</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "#2c4a72", marginTop: 4 }}>{item.price}</Text>
              <Text style={{ fontSize: 10, color: "#999", marginTop: 2 }}>📍 {item.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
