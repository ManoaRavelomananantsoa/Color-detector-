import { Button } from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <ThemedText type="title" style={styles.title}>
          Bienvenue dans Color Detector
        </ThemedText>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(400).delay(100)}>
        <ThemedText style={styles.description}>
          Utilisez la caméra pour détecter et analyser les couleurs en temps
          réel.
        </ThemedText>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(400).delay(200)}>
        <Button
          title="Ouvrir la Caméra"
          onPress={() => router.push("/camera")}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(400).delay(300)}>
        <Link href="/" dismissTo style={styles.link}>
          <ThemedText type="link">← Retour à l'accueil</ThemedText>
        </Link>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3F",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 22,
    color: "#ffffff",
  },
  link: {
    marginTop: 30,
    paddingVertical: 10,
    color: "#FF6B6B",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 30,
  },
});
