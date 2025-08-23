import * as React from "react";
interface ContainerProps {
    title: string;
    icon: string;
    subtitle: string;
    children: React.ReactNode;
    tintColor?: string;
    onClose: () => void;
    bgColor?: string;
    customIcon?: {
        source?: any;
        tintColor?: string;
    };
    actions?: {
        [key: string]: {
            icon: string;
            onPress: () => void;
            shown?: boolean;
        };
    };
}
export default function Container({ title, icon, subtitle, children, onClose, bgColor, customIcon, tintColor, actions }: ContainerProps): React.JSX.Element;
export {};
