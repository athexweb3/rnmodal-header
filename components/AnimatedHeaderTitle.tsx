import {
  ANIMATED_HEADER_TOP_OFFSET,
  SCREEN_HEIGHT,
} from "@/constants/AppConstant";
import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export const AnimatedHeaderTitle = ({
  scrollY,
  title,
}: {
  scrollY: SharedValue<number>;
  title: string;
}) => {
  const theme = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [-SCREEN_HEIGHT, 0, ANIMATED_HEADER_TOP_OFFSET],
      [SCREEN_HEIGHT, 0, -ANIMATED_HEADER_TOP_OFFSET * 0.9],
      Extrapolation.CLAMP
    );
    const scale = interpolate(
      scrollY.value,
      [0, ANIMATED_HEADER_TOP_OFFSET],
      [1, 0.7],
      Extrapolation.CLAMP
    );
    return {
      top: ANIMATED_HEADER_TOP_OFFSET,
      transform: [
        {
          translateY: translateY,
        },
        {
          scale: withSpring(scale, {
            mass: 1,
            damping: 25,
            stiffness: 180,
          }),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        { position: "absolute", alignSelf: "center", zIndex: 2 },
        animatedStyle,
      ]}
    >
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 25,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Animated.View>
  );
};
