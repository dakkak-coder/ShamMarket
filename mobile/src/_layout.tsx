import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2c4a72",
        tabBarInactiveTintColor: "#737373",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 70 : 60,
          paddingBottom: Platform.OS === "ios" ? 10 : 6,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "الرئيسية",
          tabBarIcon: ({ focused, size }) => (
            <Text
              style={[
                { fontSize: size * 1.5 },
                focused && { color: "#2c4a72" },
              ]}
            >
              🏠
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "بحث",
          tabBarIcon: ({ focused, size }) => (
            <Text
              style={[
                { fontSize: size * 1.5 },
                focused && { color: "#2c4a72" },
              ]}
            >
              🔍
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          tabBarLabel: "نشر",
          tabBarIcon: ({ focused, size }) => (
            <Text
              style={[
                { fontSize: size * 1.5 },
                focused && { color: "#e05a3a" },
              ]}
            >
              ➕
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          tabBarLabel: "إعلاناتي",
          tabBarIcon: ({ focused, size }) => (
            <Text
              style={[
                { fontSize: size * 1.5 },
                focused && { color: "#2c4a72" },
              ]}
            >
              👤
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
