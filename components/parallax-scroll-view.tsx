import React from "react";
import { ScrollView, ScrollViewProps, View } from "react-native";

interface ParallaxScrollViewProps extends ScrollViewProps {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: React.ReactNode;
}

export default function ParallaxScrollView({
  children,
  headerBackgroundColor,
  headerImage,
  style,
  contentContainerStyle,
  ...rest
}: ParallaxScrollViewProps) {
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={style}
      contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
      {...rest}
    >
      <View style={{ position: "relative", overflow: "hidden" }}>
        {headerImage && (
          <View style={{ width: "100%", height: 200, overflow: "hidden" }}>
            {headerImage}
          </View>
        )}
      </View>
      {children}
    </ScrollView>
  );
}
