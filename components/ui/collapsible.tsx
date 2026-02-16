import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet, View, ViewProps } from "react-native";

interface CollapsibleProps extends ViewProps {
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

export function Collapsible({
  title,
  children,
  style,
  isOpen = true,
  ...rest
}: CollapsibleProps) {
  return (
    <ThemedView style={[styles.container, style]} {...rest}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.arrow}>{isOpen ? "▼" : "▶"}</ThemedText>
      </View>
      {isOpen && <View style={styles.content}>{children}</View>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  arrow: {
    fontSize: 12,
    marginLeft: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
});
