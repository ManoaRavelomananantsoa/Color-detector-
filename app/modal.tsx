import { Button } from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Bienvenue dans Color Detector
      </ThemedText>

      <ThemedText style={styles.description}>
        Utilisez la caméra pour détecter et analyser les couleurs en temps réel.
      </ThemedText>

      <Button title="Ouvrir la Caméra" onPress={() => router.push("/camera")} />

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">← Retour à l'accueil</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
