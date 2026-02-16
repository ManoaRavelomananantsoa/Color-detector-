import { Button } from "@/components/button";
import { FlatIcon } from "@/components/flat-icon";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const isDark = colorScheme === "dark";

  return (
    <ScrollView
      style={[styles.container, isDark && styles.containerDark]}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDark && styles.textDark]}>
          Color Detector
        </Text>
        <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
          Détectez et analysez les couleurs
        </Text>
      </View>

      {/* Color Circle */}
      <View style={styles.colorCircleContainer}>
        <View style={styles.colorCircle}>
          <Text style={styles.colorEmoji}>🎨</Text>
        </View>
      </View>

      {/* Description Card */}
      <View
        style={[styles.descriptionCard, isDark && styles.descriptionCardDark]}
      >
        <Text style={[styles.descriptionTitle, isDark && styles.textDark]}>
          Bienvenue!
        </Text>
        <Text
          style={[styles.descriptionText, isDark && styles.textSecondaryDark]}
        >
          Utilisez votre caméra pour détecter les couleurs en temps réel.
          Obtenez des informations détaillées sur chaque teinte, saturation et
          luminosité.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <View style={[styles.featureItem, isDark && styles.featureItemDark]}>
          <FlatIcon name="camera" size={24} color="#000" />
          <Text style={[styles.featureText, isDark && styles.textDark]}>
            Détection en temps réel
          </Text>
        </View>
        <View style={[styles.featureItem, isDark && styles.featureItemDark]}>
          <FlatIcon name="target" size={24} color="#000" />
          <Text style={[styles.featureText, isDark && styles.textDark]}>
            Analyse précise
          </Text>
        </View>
        <View style={[styles.featureItem, isDark && styles.featureItemDark]}>
          <FlatIcon name="history" size={24} color="#000" />
          <Text style={[styles.featureText, isDark && styles.textDark]}>
            Historique des couleurs
          </Text>
        </View>
      </View>

      {/* Action Button */}
      <Button title="Commencer" onPress={() => router.push("/modal")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  containerDark: {
    backgroundColor: "#1A1A1A",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    color: "#000",
  },
  subtitleDark: {
    color: "#FFF",
  },
  colorCircleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  colorCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  colorEmoji: {
    fontSize: 60,
  },
  descriptionCard: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  descriptionCardDark: {
    backgroundColor: "#2A2A2A",
  },
  descriptionTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
  },
  descriptionText: {
    textAlign: "center",
    lineHeight: 22,
    opacity: 0.8,
    color: "#000",
  },
  textDark: {
    color: "#FFF",
  },
  textSecondaryDark: {
    color: "#CCC",
  },
  featuresContainer: {
    width: "100%",
    gap: 15,
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 12,
    backgroundColor: "#F9F9F9",
  },
  featureItemDark: {
    backgroundColor: "#2A2A2A",
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureText: {
    fontSize: 14,
    flex: 1,
    fontWeight: "600",
    color: "#000",
  },
});
