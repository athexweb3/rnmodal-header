import { useTheme } from "@react-navigation/native";
import * as React from "react"; // ✅ added
import { StyleSheet, Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  ANIMATED_HEADER_TOP_OFFSET,
  SCREEN_HEIGHT,
} from "../constants/AppConstant";

type AnimatedHeaderTitleProps = {
  scrollY: SharedValue<number>;
  title: string;
};

export const AnimatedHeaderTitle: React.FC<AnimatedHeaderTitleProps> = ({
  scrollY,
  title,
}) => {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const theme = useTheme();

  useDerivedValue(() => {
    translateY.value = interpolate(
      scrollY.value,
      [-SCREEN_HEIGHT, 0, ANIMATED_HEADER_TOP_OFFSET],
      [SCREEN_HEIGHT, 0, -ANIMATED_HEADER_TOP_OFFSET * 0.9],
      Extrapolation.CLAMP
    );

    scale.value = withSpring(
      interpolate(
        scrollY.value,
        [0, ANIMATED_HEADER_TOP_OFFSET * 0.5, ANIMATED_HEADER_TOP_OFFSET],
        [1, 0.8, 0.6],
        Extrapolation.CLAMP
      )
    );
  });

  const animatedStyle = useAnimatedStyle(() => ({
    top: ANIMATED_HEADER_TOP_OFFSET,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={[styles.textStyle, { color: theme.colors.text }]}>
        {title}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 2,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
});
