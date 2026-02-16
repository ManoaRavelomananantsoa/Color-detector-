import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import CameraFrame from "@/screens/CameraFrame";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function CameraScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const detectedColor = "#FF6B6B"; // Couleur détectée (exemple)
  const alpha = 1.0; // Opacité (0.0 à 1.0)

  // Convertir hex vers RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // Convertir RGB vers HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgb = hexToRgb(detectedColor);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return (
    <ThemedView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <CameraFrame />
      </Animated.View>

      {/* Color Display Box - HEX */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(200)}
        style={[styles.colorBox, isDark && styles.colorBoxDark]}
      >
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              Hexadécimal
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {detectedColor}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Color Display Box - RGB */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(300)}
        style={[styles.colorBox, isDark && styles.colorBoxDark]}
      >
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              RGB
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {`R: ${rgb.r}  G: ${rgb.g}  B: ${rgb.b}`}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Color Display Box - RGBA */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(400)}
        style={[styles.colorBox, isDark && styles.colorBoxDark]}
      >
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              RGBA
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Color Display Box - HSL */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(500)}
        style={[styles.colorBox, isDark && styles.colorBoxDark]}
      >
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              HSL
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {`hsl(${hsl.h}°, ${hsl.s}%, ${hsl.l}%)`}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Color Display Box - HSLA */}
      <Animated.View
        entering={FadeInDown.duration(400).delay(600)}
        style={[styles.colorBox, isDark && styles.colorBoxDark]}
      >
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorPreview, { backgroundColor: detectedColor }]}
          />
          <View style={styles.colorTextContainer}>
            <Text style={[styles.colorLabel, isDark && styles.colorLabelDark]}>
              HSLA
            </Text>
            <Text style={[styles.colorValue, isDark && styles.colorValueDark]}>
              {`hsla(${hsl.h}°, ${hsl.s}%, ${hsl.l}%, ${alpha})`}
            </Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(500).delay(700)}>
        <Link href="/" dismissTo style={styles.link}>
          <ThemedText type="link" style={styles.link}>
            ← Retour
          </ThemedText>
        </Link>
      </Animated.View>
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
    backgroundColor: "#0B1F3F",
  },
  title: {
    marginBottom: 20,
  },
  colorBox: {
    width: "100%",
    maxWidth: 450,
    marginTop: 10,
    padding: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
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
    gap: 10,
  },
  colorPreview: {
    width: 45,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#DDD",
  },
  colorTextContainer: {
    flex: 1,
  },
  colorLabel: {
    fontSize: 11,
    color: "#666",
    marginBottom: 3,
  },
  colorLabelDark: {
    color: "#AAA",
  },
  colorValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 0.5,
  },
  colorValueDark: {
    color: "#FFF",
  },
  link: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 30,
    borderRadius: 25,
    color: "white",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
