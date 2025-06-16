import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top + 100 }]}>
      <Pressable
        onPress={() => router.push("/exportCanvas")}
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
      >
        <Text style={styles.textStyle}>Settings</Text>
      </Pressable>
    </View>
  );
}
``;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "500",
  },
});
