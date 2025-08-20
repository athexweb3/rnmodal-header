import { AnimatedHeaderTitle } from "./AnimatedHeaderTitle";
import { BlurHeader } from "./BlurHeader";
import { ScrollViewContent } from "./ScrollViewContent";
import {
  DUMMY_ITEM_HEIGHT,
  HEADER_HEIGHT,
  ICON_HEIGHT,
  SCREEN_HEIGHT,
  TOP_PADDING,
} from "../constants/AppConstant";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as React from "react"; // ✅ must import React in TSX files
import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ContainerProps = {
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  subtitle: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Container({ title, icon, subtitle, children, onClose }: ContainerProps) {
  const theme = useTheme();
  const scrollY = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <BlurView intensity={100} tint={"prominent"} style={styles.absoluteBlurBg} />
      <BlurHeader onClose={onClose} />
      <AnimatedHeaderTitle scrollY={scrollY} title={title} />
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        scrollIndicatorInsets={{ top: HEADER_HEIGHT, bottom: bottom + 10 }}
        contentContainerStyle={[styles.scrollViewContent, { paddingBottom: bottom + 50 }]}
      >
        <Ionicons name={icon} size={1.2 * ICON_HEIGHT} color={theme.colors.text} style={styles.icon} />
        <View style={styles.headerTitleSpace} />
        <ScrollViewContent subtitle={subtitle} children={children} />
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
