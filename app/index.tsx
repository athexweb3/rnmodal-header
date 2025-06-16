import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.boxes}>
        <View style={[styles.box, { backgroundColor: "red", left: -25 }]} />
        <View
          style={[styles.box, { backgroundColor: "green", left: 0, top: -25 }]}
        />
        <View style={[styles.box, { backgroundColor: "blue", left: 25 }]} />
      </View>
      <Pressable
        onPress={() => router.push("/exportCanvas")}
        style={{
          backgroundColor: theme.colors.card,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: theme.colors.text }}>Export Canvas</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxes: {
    flexDirection: "row",
    position: "relative",
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
  },
});
