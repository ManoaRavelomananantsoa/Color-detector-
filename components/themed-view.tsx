import { useColorScheme } from "@/hooks/use-color-scheme";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps {
  lightColor?: string;
  darkColor?: string;
}

export function ThemedView({
  style,
  lightColor = "#FFF",
  darkColor = "#1A1A1A",
  ...rest
}: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === "dark" ? darkColor : lightColor;

  return <View style={[{ backgroundColor }, style]} {...rest} />;
}
