import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import CameraFrame from "@/screens/CameraFrame";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function CameraScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Détecteur de Couleurs
      </ThemedText>

      <CameraFrame />

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">← Retour</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    marginBottom: 20,
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
