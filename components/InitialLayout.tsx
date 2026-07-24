import { useAuth } from "@clerk/expo";
import { useRouter, useSegments } from "expo-router";


export default function initialLayout() {
    const { isLoaded, isSignedIn } = useAuth();

    const segments = useSegments();
    const router = useRouter();



}