import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import CameraFrame from "@/screens/CameraFrame";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CameraScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const detectedColor = "#FF6B6B"; // Couleur détectée (exemple)

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Détecteur de Couleurs
      </ThemedText>

      <CameraFrame />

      {/* Color Display Box */}
      <View style={[styles.colorBox, isDark && styles.colorBoxDark]}>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              Couleur détectée
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {detectedColor}
            </Text>
          </View>
        </View>
      </View>

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
  colorBox: {
    width: "100%",
    maxWidth: 450,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  colorBoxDark: {
    backgroundColor: "#2A2A2A",
  },
  colorInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  colorPreview: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#DDD",
  },
  colorTextContainer: {
    flex: 1,
  },
  colorLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  colorLabelDark: {
    color: "#AAA",
  },
  colorValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 1,
  },
  colorValueDark: {
    color: "#FFF",
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
  },
});
