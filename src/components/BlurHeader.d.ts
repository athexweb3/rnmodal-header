import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
type BlurHeaderProps = {
    onClose: () => void;
    actions?: {
        [key: string]: {
            icon: ComponentProps<typeof Ionicons>["name"];
            onPress: () => void;
            shown?: boolean;
        };
    };
};
export declare const BlurHeader: ({ onClose, actions }: BlurHeaderProps) => React.JSX.Element;
export default BlurHeader;
