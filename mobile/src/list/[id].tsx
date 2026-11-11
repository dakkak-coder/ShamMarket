import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView style={{ flex: 1 }}>
        {/** Images */}
        <View style={{ height: 240, backgroundColor: "#eee" }}>
          <Image
            source={{ uri: "https://picsum.photos/seed/detail/400/240" }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>

        {/** Seller */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 16 }}>
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#2c4a72",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>أ</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#333" }}>أحمد — موثّق ✓</Text>
            <Text style={{ fontSize: 11, color: "#999" }}>دمشق · منذ ٦ أشهر</Text>
          </View>
        </View>

        {/** Title & Price */}
        <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            Samsung Galaxy S23 Ultra 256GB
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#2c4a72", marginTop: 4 }}>
            ١٢٠٠$ نقداً
          </Text>
        </View>

        {/** Description */}
        <View style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 16,
          marginHorizontal: 16,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "#e5e5e5",
        }}>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#555", marginBottom: 8 }}>الوصف</Text>
          <Text style={{ fontSize: 13, color: "#666", lineHeight: 22 }}>
            الجهاز بحالة ممتازة، شاحن أصلي، كرتون كامل. بدون خدوش أو أعطال.
            ضمان ٤٨ ساعة — إذا ما لقيت زي ما قلت، أرجع.
            ممكن أشوفك في نقطة الضمان.
          </Text>
        </View>

        {/** Location */}
        <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          <Text style={{ fontSize: 12, color: "#999" }}>📍 دمشق — المزة · نشر منذ ساعتين</Text>
        </View>
      </ScrollView>

      {/** Bottom CTA */}
      <View style={{
        flexDirection: "row",
        gap: 12,
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e5e5e5",
      }}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#2c4a72",
          borderRadius: 10,
          paddingVertical: 12,
          alignItems: "center",
        }}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>💬 رسالة</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: "#e05a3a",
          borderRadius: 10,
          paddingVertical: 12,
          alignItems: "center",
        }}>
          <Text style={{ color: "#fff", fontWeight: "600" }}>📞 اتصل</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
