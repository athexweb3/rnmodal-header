import * as React from "react";
import { SharedValue } from "react-native-reanimated";
type AnimatedHeaderTitleProps = {
    scrollY: SharedValue<number>;
    title: string;
};
export declare const AnimatedHeaderTitle: React.FC<AnimatedHeaderTitleProps>;
export {};
