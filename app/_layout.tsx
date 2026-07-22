import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="notifications" options={{ title: "Notifications", headerShown: false }} />
          <Stack.Screen name="prfile" options={{ title: "Profile", headerShown: false }} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
