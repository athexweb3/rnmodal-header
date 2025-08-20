import React from "react";
import { HEADER_HEIGHT } from "../constants/AppConstant";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { easeGradient } from "react-native-easing-gradient";


export const BlurHeader = ({ onClose }: { onClose: () => void }) => {
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
            locations={
              (locations.length >= 2 ? locations : [0, 1]) as unknown as readonly [number, number, ...number[]]
            }
            colors={
              (colors.length >= 2 ? colors : ["black", "transparent"]) as unknown as readonly [string, string, ...string[]]
            }
            style={StyleSheet.absoluteFill}
          />
        }
        style={[[StyleSheet.absoluteFill, { height: 2.5 * HEADER_HEIGHT }]]}
      >
        <BlurView intensity={50} tint={"prominent"} style={StyleSheet.absoluteFillObject} />
      </MaskedView>

      <Pressable
        onPress={onClose}
        style={[
          styles.closeButton,
          {
            borderColor: theme.colors.border,
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
    borderWidth: 1,
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
