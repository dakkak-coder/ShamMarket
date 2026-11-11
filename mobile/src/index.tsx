import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

// Mock data
const mockListings = [
  {
    id: "1",
    title: "Samsung Galaxy S23 Ultra 256GB",
    price: "١٢٠٠$",
    image: "https://picsum.photos/seed/samsung/200/150",
    location: "المزة · دمشق",
    time: "منذ ساعتين",
  },
  {
    id: "2",
    title: "شقة مفروشة ٣ غرف — أبو رمانة",
    price: "٣٥٠٠$",
    image: "https://picsum.photos/seed/apt/200/150",
    location: "أبو رمانة · دمشق",
    time: "منذ ٥ ساعات",
  },
  {
    id: "3",
    title: "Hyundai Tucson 2020",
    price: "٨٥٠٠$",
    image: "https://picsum.photos/seed/car/200/150",
    location: "اللاذقية",
    time: "منذ يوم",
  },
  {
    id: "4",
    title: "آيفون ١٥ برو ماكس 256GB",
    price: "١١٠٠$",
    image: "https://picsum.photos/seed/iphone/200/150",
    location: "الميدان · دمشق",
    time: "منذ ساعة",
  },
  {
    id: "5",
    title: "كنب كوفي ١+٢ نظيف",
    price: "٨٠٠$",
    image: "https://picsum.photos/seed/sofa/200/150",
    location: "الحواجة · حلب",
    time: "منذ ٣ ساعات",
  },
];

const categories = [
  { emoji: "📱", label: "موبايلات" },
  { emoji: "🚗", label: "سيارات" },
  { emoji: "🛋️", label: "عفش" },
  { emoji: "🏠", label: "عقارات" },
  { emoji: "💼", label: "وظائف" },
  { emoji: "🐾", label: "حيوانات" },
  { emoji: "🎁", label: "مجاني" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <View style={{ backgroundColor: "#fff", padding: 16, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2c4a72", textAlign: "center" }}>
          شام ماركت
        </Text>

        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginTop: 12,
          }}
        >
          <TextInput
            placeholder="ابحث عن سيارة، هاتف، عفش..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              flex: 1,
              fontSize: 14,
              color: "#333",
              padding: 0,
            }}
            dir="rtl"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#2c4a72",
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 8,
            }}
            onPress={() => router.push("/search")}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 13 }}>بحث</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ padding: 16, paddingBottom: 4 }}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              paddingHorizontal: 14,
              paddingVertical: 8,
              marginRight: 8,
              borderWidth: 1,
              borderColor: "#e5e5e5",
            }}
          >
            <Text style={{ fontSize: 13, color: "#555" }}>{cat.emoji} {cat.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Listings */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 17, fontWeight: "600", color: "#333", marginBottom: 12 }}>
          أحدث الإعلانات
        </Text>

        <FlatList
          data={mockListings}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                marginBottom: 12,
              }}
              onPress={() => router.push(`/list/${item.id}`)}
            >
              <View style={{ height: 140, backgroundColor: "#eee" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
              <View style={{ padding: 10 }}>
                <Text numberOfLines={2} style={{ fontSize: 14, color: "#333" }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2c4a72", marginTop: 4 }}>
                  {item.price}
                </Text>
                <Text style={{ fontSize: 11, color: "#999", marginTop: 4 }}>
                  📍 {item.location} · {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}
