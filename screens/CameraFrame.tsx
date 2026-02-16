import { useColorScheme } from "@/hooks/use-color-scheme";
import { StyleSheet, Text, View } from "react-native";

export default function CameraFrame() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={styles.container}>
      {/* Camera Frame */}
      <View style={[styles.cameraFrame, isDark && styles.cameraFrameDark]}>
        {/* Placeholder pour la caméra */}
        <View style={styles.cameraPlaceholder}>
          <Text
            style={[
              styles.placeholderText,
              isDark && styles.placeholderTextDark,
            ]}
          >
            📷
          </Text>
          <Text
            style={[
              styles.placeholderLabel,
              isDark && styles.placeholderLabelDark,
            ]}
          >
            Caméra
          </Text>
        </View>

        {/* Coins du cadre (Frame corners) */}
        <View style={[styles.cornerTopLeft, isDark && styles.cornerDark]} />
        <View style={[styles.cornerTopRight, isDark && styles.cornerDark]} />
        <View style={[styles.cornerBottomLeft, isDark && styles.cornerDark]} />
        <View style={[styles.cornerBottomRight, isDark && styles.cornerDark]} />

        {/* Crosshair central */}
        <View style={styles.crosshair}>
          <View
            style={[styles.crosshairHorizontal, isDark && styles.crosshairDark]}
          />
          <View
            style={[styles.crosshairVertical, isDark && styles.crosshairDark]}
          />
        </View>
      </View>

      {/* Instructions */}
      <Text style={[styles.instruction, isDark && styles.instructionDark]}>
        Pointez la caméra vers une couleur
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  cameraFrame: {
    width: "100%",
    aspectRatio: 1,
    maxWidth: 350,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cameraFrameDark: {
    backgroundColor: "#2A2A2A",
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  placeholderText: {
    fontSize: 80,
    marginBottom: 10,
  },
  placeholderLabel: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  placeholderLabelDark: {
    color: "#AAA",
  },
  placeholderTextDark: {
    opacity: 0.8,
  },

  // Frame corners
  cornerTopLeft: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FF6B6B",
  },
  cornerTopRight: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FF6B6B",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 15,
    left: 15,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FF6B6B",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FF6B6B",
  },
  cornerDark: {
    borderColor: "#FF8080",
  },

  // Crosshair
  crosshair: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 40,
    height: 40,
    marginTop: -20,
    marginLeft: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  crosshairHorizontal: {
    position: "absolute",
    width: 40,
    height: 2,
    backgroundColor: "#FF6B6B",
  },
  crosshairVertical: {
    position: "absolute",
    width: 2,
    height: 40,
    backgroundColor: "#FF6B6B",
  },
  crosshairDark: {
    backgroundColor: "#FF8080",
  },

  // Instructions
  instruction: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  instructionDark: {
    color: "#AAA",
  },
});
