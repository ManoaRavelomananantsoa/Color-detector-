import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text, TextProps } from "react-native";

const textTypes = {
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
};

interface ThemedTextProps extends TextProps {
  type?: keyof typeof textTypes;
}

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? "#FFF" : "#000";

  return <Text {...rest} style={[{ color }, textTypes[type], style]} />;
}
