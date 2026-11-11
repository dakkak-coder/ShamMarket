import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function NewScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 16 }}>
          نشر إعلان جديد
        </Text>

        {/** Title */}
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>العنوان</Text>
        <TextInput
          placeholder="مثال: iPhone 15 Pro Max نظيف"
          value={title}
          onChangeText={setTitle}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 12,
            fontSize: 14,
            color: "#333",
            borderWidth: 1,
            borderColor: "#e5e5e5",
            marginBottom: 12,
          }}
          dir="rtl"
        />

        {/** Category */}
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>الفئة</Text>
        <View style={{ backgroundColor: "#fff", borderRadius: 10, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: "#e5e5e5" }}>
          <Text style={{ fontSize: 14, color: "#555" }}>📱 موبايلات</Text>
        </View>

        {/** Price */}
        <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>السعر</Text>
            <TextInput
              placeholder="١٢٠٠$"
              value={price}
              onChangeText={setPrice}
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 12,
                fontSize: 14,
                color: "#333",
                borderWidth: 1,
                borderColor: "#e5e5e5",
              }}
            />
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ fontSize: 13, color: "#555" }}>قابل للتفاوض</Text>
          </View>
        </View>

        {/** Description */}
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>الوصف</Text>
        <TextInput
          placeholder="اكتب تفاصيل الإعلان..."
          value={description}
          onChangeText={setDescription}
          numberOfLines={5}
          multiline
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 12,
            fontSize: 14,
            color: "#333",
            borderWidth: 1,
            borderColor: "#e5e5e5",
            textAlignVertical: "top",
            marginBottom: 12,
          }}
          dir="rtl"
        />

        {/** Photos */}
        <Text style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>الصور</Text>
        <View style={{
          borderStyle: "dashed",
          borderWidth: 2,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 24,
          alignItems: "center",
          marginBottom: 12,
        }}>
          <Text style={{ fontSize: 14, color: "#999" }}>📷 اضغط لإضافة صور (حتى 8)</Text>
        </View>

        {/** Submit */}
        <TouchableOpacity style={{
          backgroundColor: "#e05a3a",
          borderRadius: 10,
          paddingVertical: 14,
          alignItems: "center",
          marginBottom: 12,
        }}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>نشر الإعلان</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
