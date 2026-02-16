import { View, ViewStyle } from "react-native";

interface FlatIconProps {
  name: "camera" | "target" | "history";
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function FlatIcon({
  name,
  size = 24,
  color = "#000",
  style,
}: FlatIconProps) {
  const containerSize = size;
  const iconSize = size * 0.8;

  // Camera Icon - flat design
  if (name === "camera") {
    return (
      <View
        style={[
          {
            width: containerSize,
            height: containerSize,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        <View
          style={{
            width: iconSize,
            height: iconSize * 0.75,
            borderWidth: 2,
            borderColor: color,
            borderRadius: 4,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: iconSize * 0.4,
              height: iconSize * 0.4,
              borderRadius: iconSize * 0.2,
              borderWidth: 1.5,
              borderColor: color,
            }}
          />
        </View>
      </View>
    );
  }

  // Target Icon - flat design
  if (name === "target") {
    return (
      <View
        style={[
          {
            width: containerSize,
            height: containerSize,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        {/* Outer circle */}
        <View
          style={{
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize / 2,
            borderWidth: 1.5,
            borderColor: color,
            position: "absolute",
          }}
        />
        {/* Middle circle */}
        <View
          style={{
            width: iconSize * 0.6,
            height: iconSize * 0.6,
            borderRadius: iconSize * 0.3,
            borderWidth: 1.5,
            borderColor: color,
            position: "absolute",
          }}
        />
        {/* Center dot */}
        <View
          style={{
            width: iconSize * 0.25,
            height: iconSize * 0.25,
            borderRadius: iconSize * 0.125,
            backgroundColor: color,
          }}
        />
      </View>
    );
  }

  // History Icon - flat design (clock)
  if (name === "history") {
    return (
      <View
        style={[
          {
            width: containerSize,
            height: containerSize,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        {/* Clock face */}
        <View
          style={{
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize / 2,
            borderWidth: 2,
            borderColor: color,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Hour hand */}
          <View
            style={{
              position: "absolute",
              width: 1.5,
              height: iconSize * 0.3,
              backgroundColor: color,
              top: iconSize * 0.2,
            }}
          />
          {/* Minute hand */}
          <View
            style={{
              position: "absolute",
              width: 1.5,
              height: iconSize * 0.35,
              backgroundColor: color,
              right: iconSize * 0.25,
              transform: [{ rotate: "90deg" }],
            }}
          />
        </View>
      </View>
    );
  }

  return null;
}
