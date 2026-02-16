import { StyleProp, Text, TextStyle } from "react-native";

type IconSymbolName =
  | "house.fill"
  | "paperplane.fill"
  | "chevron.left.circle"
  | "chevron.right.circle"
  | "chevron.left"
  | "chevron.right"
  | "circle"
  | "circle.fill"
  | "checkmark.circle.fill"
  | "xmark.circle.fill"
  | "star.fill"
  | "star"
  | "person.fill"
  | "gear"
  | "ellipsis"
  | "ellipsis.circle"
  | "square.and.arrow.up"
  | "square.and.arrow.up.on.square"
  | "arrow.up.right"
  | "arrow.up.left"
  | "arrow.down.right"
  | "arrow.down.left"
  | "arrow.up"
  | "arrow.down"
  | "arrow.left"
  | "arrow.right"
  | "bell"
  | "bell.fill"
  | "bell.badge"
  | "bell.badge.fill"
  | "trash"
  | "trash.fill"
  | "cube"
  | "cube.transparent"
  | "plus"
  | "camera.fill"
  | "target"
  | "clock.fill";

interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color: string;
  style?: StyleProp<TextStyle>;
}

export function IconSymbol({ name, size = 24, color, style }: IconSymbolProps) {
  // Simple emoji fallback for icons
  const emojiMap: Record<IconSymbolName, string> = {
    "house.fill": "🏠",
    "paperplane.fill": "✈️",
    "chevron.left.circle": "◀️",
    "chevron.right.circle": "▶️",
    "chevron.left": "‹",
    "chevron.right": "›",
    circle: "○",
    "circle.fill": "●",
    "checkmark.circle.fill": "✓",
    "xmark.circle.fill": "✕",
    "star.fill": "★",
    star: "☆",
    "person.fill": "👤",
    gear: "⚙️",
    ellipsis: "⋯",
    "ellipsis.circle": "⊙",
    "square.and.arrow.up": "⬆️",
    "square.and.arrow.up.on.square": "📤",
    "arrow.up.right": "↗️",
    "arrow.up.left": "↖️",
    "arrow.down.right": "↘️",
    "arrow.down.left": "↙️",
    "arrow.up": "↑",
    "arrow.down": "↓",
    "arrow.left": "←",
    "arrow.right": "→",
    bell: "🔔",
    "bell.fill": "🔔",
    "bell.badge": "🔔",
    "bell.badge.fill": "🔔",
    trash: "🗑️",
    "trash.fill": "🗑️",
    cube: "🎲",
    "cube.transparent": "📦",
    plus: "+",
    "camera.fill": "📷",
    target: "🎯",
    "clock.fill": "⏱️",
  };

  const emoji = emojiMap[name] || "●";

  return <Text style={[{ fontSize: size, color }, style]}>{emoji}</Text>;
}
