import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import {
    Gesture,
    GestureDetector
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({ title, onPress, style, textStyle }: ButtonProps) {
  const scale = useSharedValue(1);

  const gesture = Gesture.Tap()
    .onStart(() => {
      scale.value = withSpring(0.95);
    })
    .onEnd(() => {
      scale.value = withSpring(1);
      onPress();
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.button, style, animatedStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
