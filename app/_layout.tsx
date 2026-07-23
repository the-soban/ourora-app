import { ClerkLoaded, ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>


        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#111111" }}>
            <Stack screenOptions={{ headerShown: false }} />
            {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="notifications" options={{ title: "Notifications", headerShown: false }} />
          <Stack.Screen name="prfile" options={{ title: "Profile", headerShown: false }} /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

