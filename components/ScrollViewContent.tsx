import { useTheme } from "@react-navigation/native";
import * as React from "react"; 
import { StyleSheet, Text, View } from "react-native";

type ScrollViewContentProps = {
  subtitle: string;
  children: React.ReactNode;
};

export const ScrollViewContent: React.FC<ScrollViewContentProps> = ({
  subtitle,
  children,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        {subtitle}
      </Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
  subtitle: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 13,
    opacity: 0.7,
  },
});
