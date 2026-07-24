import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';
import { useRouter } from "expo-router";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function login() {
    const {startSSOFlow} = useSSO();
    const router = useRouter();
        const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId, setActive} = await startSSOFlow({ 
                strategy: "oauth_google",
                // Put redirectUrl here, inside startSSOFlow
                redirectUrl: Linking.createURL('/(tabs)') 
            })

            if(setActive && createdSessionId) {
                setActive({ session: createdSessionId });
                // Uncomment this to actually navigate after setting the session
                router.replace("/(tabs)");
            }
        } catch (error) {
            console.error("OAuth error", error);
        }
    }



  return (
    <View style={styles.container}>
        {/* BRAND LOGO SECTION */}
        <View style={styles.brandSection}>
            <Image source={require("../../assets/images/ourora-iconmark-2.png")} style={{ width: 90, height: 90, resizeMode: "contain", marginLeft: 20 }} />
        <Text style={styles.appName}>ourora</Text>
        <Text style={styles.tagline}>our complete network</Text>
        </View>

        {/* VISUAL */}
        <View>
            <Image source={require("../../assets/images/login-visual.png")} style={{ width: 320, height: 320, resizeMode: "contain" }} />
        </View>

        {/* LOGIN BUTTONS */}
        <View style={styles.loginSection}>
            <TouchableOpacity 
                style={styles.googleButton}
                onPress={handleGoogleSignIn}
                activeOpacity={0.8}
            >
                <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={20} color={COLORS.surface} />
                </View>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By continuing, you agree to our <Text style={{ color: COLORS.primary }}>Terms of Service</Text> and <Text style={{ color: COLORS.primary }}>Privacy Policy</Text>

            </Text>
        </View>





    </View>
  )
}