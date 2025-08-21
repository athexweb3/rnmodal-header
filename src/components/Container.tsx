import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as React from "react"; // ✅ must import React in TSX files
import { ComponentProps } from "react";
import { Image, StyleProp, StyleSheet, TextStyle, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DUMMY_ITEM_HEIGHT,
  HEADER_HEIGHT,
  ICON_HEIGHT,
  SCREEN_HEIGHT,
  TOP_PADDING,
} from "../constants/AppConstant";
import { AnimatedHeaderTitle } from "./AnimatedHeaderTitle";
import { BlurHeader } from "./BlurHeader";
import { ScrollViewContent } from "./ScrollViewContent";

type ContainerProps = {
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  subtitle: string;
  children: React.ReactNode;
  tintColor?: any;
  onClose: () => void;
  bgColor?: string;
  customIcon?: {
    source?: any;
    tintColor?: string;
  }
   actions?: {
    [key: string]: {
      icon: ComponentProps<typeof Ionicons>["name"];
      onPress: () => void;
      shown?: boolean;
    };
  };
};



export default function Container(
  { title, icon, subtitle, children, onClose, bgColor, customIcon, tintColor, actions}: ContainerProps) {
  const theme = useTheme();
  const scrollY = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });


  function correctHex(hex: string) {
    if (hex.startsWith("#")) {
      hex = hex.slice(1);
    }
    if (hex.length === 3) {
      hex = hex.split("").map((char) => char + char).join("");
    }
    return `#${hex}`;
  }

  return (

    <View
      style={[
        styles.container,
        { backgroundColor: bgColor ?? theme.colors.background },
      ]}
    >
      <BlurView intensity={100} tint={"prominent"} style={styles.absoluteBlurBg} />
      <BlurHeader actions={actions} onClose={onClose} />
      <AnimatedHeaderTitle scrollY={scrollY} title={title} />
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        scrollIndicatorInsets={{ top: HEADER_HEIGHT, bottom: bottom + 10 }}
        contentContainerStyle={[styles.scrollViewContent, { paddingBottom: bottom + 50 }]}
      >
        {
          customIcon &&
          <Image
            source={customIcon.source}
            tintColor={customIcon.tintColor ? correctHex(customIcon.tintColor) : theme.colors.text}
            style={[styles.icon, { height: 1.2 * ICON_HEIGHT, width: 1.2 * ICON_HEIGHT }]}

          />
        }
        {
          !customIcon &&
          <Ionicons name={icon} size={1.2 * ICON_HEIGHT} color={tintColor ? correctHex(tintColor) : theme.colors.text} style={styles.icon} />
        }
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
