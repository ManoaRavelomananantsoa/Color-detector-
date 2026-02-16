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
    padding: 0,
  },
  cameraFrame: {
    width: "100%",
    aspectRatio: 1,
    maxWidth: 450,
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
    fontSize: 100,
    marginBottom: 15,
  },
  placeholderLabel: {
    fontSize: 18,
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
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#FF6B6B",
  },
  cornerTopRight: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#FF6B6B",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 20,
    left: 20,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#FF6B6B",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
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
    width: 50,
    height: 50,
    marginTop: -25,
    marginLeft: -25,
    justifyContent: "center",
    alignItems: "center",
  },
  crosshairHorizontal: {
    position: "absolute",
    width: 50,
    height: 2.5,
    backgroundColor: "#FF6B6B",
  },
  crosshairVertical: {
    position: "absolute",
    width: 2.5,
    height: 50,
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
