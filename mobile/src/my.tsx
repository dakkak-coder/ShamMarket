import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const myListings = [
  { id: "1", title: "Samsung Galaxy S23", status: "active", views: 142, contacts: 8 },
  { id: "2", title: "Hyundai Tucson 2020", status: "active", views: 89, contacts: 3 },
  { id: "3", title: "كنب كوفي ١+٢", status: "expired", views: 234, contacts: 12 },
];

export default function MyScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 8 }}>
          إعلاناتي
        </Text>
        <Text style={{ fontSize: 13, color: "#999", marginBottom: 16 }}>
          لديك ٣ إعلانات · ٢ نشط حالياً
        </Text>

        {/** Stats */}
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 20 }}>
          {[
            { label: "إعلانات", value: "٣" },
            { label: "مشاهدة", value: "٤٦٥" },
            { label: "تواصل", value: "٢٣" },
          ].map((stat) => (
            <View key={stat.label} style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 12,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#e5e5e5",
            }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2c4a72" }}>{stat.value}</Text>
              <Text style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/** Listings */}
        <View style={{ gap: 10 }}>
          {myListings.map((item) => (
            <View key={item.id} style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#e5e5e5",
            }}>
              <View style={{ width: 64, height: 64, backgroundColor: "#eee" }}>
                <Image source={{ uri: "https://picsum.photos/seed/thumb/64/64" }} style={{ width: "100%", height: "100%" }} contentFit="cover" />
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text numberOfLines={1} style={{ fontSize: 13, color: "#333" }}>{item.title}</Text>
                <Text style={{ fontSize: 10, color: "#999", marginTop: 2 }}>
                  {item.status === "active" ? "🟢 نشط" : "⚪ منتهي"} · {item.views} مشاهدة · {item.contacts} تواصل
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
