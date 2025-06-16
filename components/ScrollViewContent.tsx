import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CARD_DATA } from "../constants/SettingData";
import { OptionsCard } from "./OptionsCard";

export const ScrollViewContent = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        {"Customize your app experience and manage \nyour preferences"}
      </Text>
      {CARD_DATA.map((card) => (
        <OptionsCard key={card.title} cardData={card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 25,
  },
  subtitle: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 13,
    opacity: 0.7,
  },
});
