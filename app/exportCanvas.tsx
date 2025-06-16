import { AnimatedHeaderTitle } from "@/components/AnimatedHeaderTitle";
import { BlurHeader } from "@/components/BlurHeader";
import { ScrollViewContent } from "@/components/ScrollViewContent";
import {
  DUMMY_ITEM_HEIGHT,
  HEADER_HEIGHT,
  ICON_HEIGHT,
  SCREEN_HEIGHT,
  TOP_PADDING,
} from "@/constants/AppConstant";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Color from "color";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ExportCanvas() {
  const theme = useTheme();
  const scrollY = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <BlurView
        intensity={100}
        tint={"prominent"}
        style={[
          styles.absoluteBlurBg,
          {
            backgroundColor: Color(theme.colors.background)
              .alpha(0.8)
              .toString(),
          },
        ]}
      />
      <BlurHeader />
      <AnimatedHeaderTitle scrollY={scrollY} title="Export Canvas" />
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        scrollIndicatorInsets={{
          top: HEADER_HEIGHT,
          bottom: bottom + 10,
        }}
        contentContainerStyle={[
          styles.scrollViewContent,
          { paddingBottom: bottom + 50 },
        ]}
      >
        <Ionicons
          name="cog-outline"
          size={1.2 * ICON_HEIGHT}
          color={theme.colors.text}
          style={styles.icon}
        />
        <View style={styles.headerTitleSpace} />
        <ScrollViewContent />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.95,
  },
  absoluteBlurBg: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  scrollViewContent: {
    paddingTop: HEADER_HEIGHT + TOP_PADDING,
  },
  headerTitleSpace: {
    height: DUMMY_ITEM_HEIGHT,
    alignSelf: "center",
    width: "100%",
  },
  icon: {
    alignSelf: "center",
  },
});
