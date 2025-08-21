import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{
            presentation: "formSheet",
            sheetCornerRadius: 30,
            sheetElevation: 10,
            sheetGrabberVisible: false,
            fullScreenGestureEnabled: true,
            fullScreenGestureShadowEnabled: true,
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
         <Stack.Screen
          name="test"
          options={{
            presentation: "formSheet",
            sheetCornerRadius: 30,
            sheetElevation: 10,
            sheetGrabberVisible: false,
            fullScreenGestureEnabled: true,
            fullScreenGestureShadowEnabled: true,
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
