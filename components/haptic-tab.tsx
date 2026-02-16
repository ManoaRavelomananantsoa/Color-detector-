import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import {
    NavigationHelpers,
    ParamListBase,
    TabNavigationState,
} from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, PressableProps } from "react-native";

export function HapticTab(
  props: PressableProps & {
    state: TabNavigationState<ParamListBase>;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  },
): React.JSX.Element {
  return (
    <Pressable
      {...props}
      onPress={(e) => {
        // Use a light impact iOS style haptic
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        props.onPress?.(e);
      }}
    >
      {props.children}
    </Pressable>
  );
}
