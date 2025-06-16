import { HEADER_HEIGHT } from "@/constants/AppConstant";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { easeGradient } from "react-native-easing-gradient";

export const BlurHeader = () => {
  const theme = useTheme();
  const router = useRouter();
  const { colors, locations } = easeGradient({
    colorStops: {
      1: { color: "transparent" },
      0: { color: "black" },
    },
  });
  return (
    <View style={styles.header}>
      <MaskedView
        maskElement={
          <LinearGradient
            locations={locations}
            colors={colors}
            style={StyleSheet.absoluteFill}
          />
        }
        style={[[StyleSheet.absoluteFill, { height: 2.5 * HEADER_HEIGHT }]]}
      >
        <BlurView
          intensity={100}
          tint={"prominent"}
          style={[StyleSheet.absoluteFill]}
        />
      </MaskedView>
      <Pressable
        onPress={() => router.back()}
        style={[
          styles.closeButton,
          {
            borderColor: theme.colors.text,
          },
        ]}
      >
        <Ionicons name="close" size={18} color={theme.colors.text} />
      </Pressable>
    </View>
  );
};

export default BlurHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  scrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    borderRadius: 50,
    top: -10,
    right: 5,
  },
  header: {
    height: 2 * HEADER_HEIGHT,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
});
