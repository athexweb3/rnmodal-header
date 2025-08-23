import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { easeGradient } from "react-native-easing-gradient";
import { HEADER_HEIGHT } from "../constants/AppConstant";
export const BlurHeader = ({ onClose, actions }) => {
    const theme = useTheme();
    const { colors, locations } = easeGradient({
        colorStops: {
            1: { color: "transparent" },
            0: { color: "black" },
        },
    });
    // Include all actions that are `shown !== false` (default true)
    const filteredActions = actions
        ? Object.entries(actions)
            .filter(([_, value]) => value.shown !== false)
            .map(([key, { icon, onPress }]) => ({ key, icon, onPress }))
        : [];
    // Add close button at the end
    const allButtons = [...filteredActions, { key: "close", icon: "close", onPress: onClose }];
    return (<View style={styles.header}>
      <MaskedView maskElement={<LinearGradient locations={(locations.length >= 2 ? locations : [0, 1])} colors={(colors.length >= 2 ? colors : ["black", "transparent"])} style={StyleSheet.absoluteFill}/>} style={[StyleSheet.absoluteFill, { height: 2.5 * HEADER_HEIGHT }]}>
        <BlurView intensity={50} tint={"prominent"} style={StyleSheet.absoluteFillObject}/>
      </MaskedView>

      {allButtons.map((btn, index) => {
            const isFirst = index === 0;
            const isLast = index === allButtons.length - 1;
            return (<Pressable key={btn.key} onPress={btn.onPress} style={[
                    styles.actionButton,
                    {
                        borderColor: theme.colors.border,
                        borderTopLeftRadius: isFirst ? 50 : 0,
                        borderBottomLeftRadius: isFirst ? 50 : 0,
                        borderTopRightRadius: isLast ? 50 : 0,
                        borderBottomRightRadius: isLast ? 50 : 0,
                    },
                ]}>
            <Ionicons name={btn.icon} size={18} color={theme.colors.text}/>
          </Pressable>);
        })}
    </View>);
};
export default BlurHeader;
const styles = StyleSheet.create({
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
    actionButton: {
        borderWidth: 1,
        padding: 5,
        marginLeft: 1,
    },
});
