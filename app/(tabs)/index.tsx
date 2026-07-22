import { Link } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world.</Text>

      {/* the difference between TouchableOpacity and Pressable is that Pressable provides more control over the press interactions, allowing you to customize the behavior based on the press state (e.g., pressed, hovered, focused). TouchableOpacity is a simpler component that only changes the opacity of the button when pressed. */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("You touched me")}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.7 : 1 },
        ]}
        onPress={() => alert("You touched me too?")}
      >
        <Text style={styles.buttonText}>Press me too</Text>
      </Pressable>

      {/* How to use images in React Native, both from local and online sources: */}

      <Image source={require("../../assets/images/icon.png")} style={{ width: 240, height: 240, borderRadius: 16, resizeMode: "cover" }} />

      <Image source={{uri: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?_gl=1*zk3o6m*_ga*NzIxMDIzNDEyLjE3ODQ3NDU3NjY.*_ga_8JE65Q40S6*czE3ODQ3NDU3NjYkbzEkZzEkdDE3ODQ3NDU4MDIkajI0JGwwJGgw"}} style={{ width: 240, height: 240, borderRadius: 16, resizeMode: "cover" }} />

      <Link href={"/notifications"} style={styles.navLink}>
        <Text style={styles.navLinkText}>Notifications</Text>
      </Link>

      <Link href={"/profile"} style={styles.navLink}>
        <Text style={styles.navLinkText}>Profile</Text>
      </Link>

    </View>
  );
}