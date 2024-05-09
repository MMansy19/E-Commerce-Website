import type { Placement } from "@floating-ui/core";
import type { ComponentProps, FC, ReactNode } from "react";
export interface FlowbiteFloatingTheme {
    arrow: FlowbiteFloatingArrowTheme;
    animation: string;
    base: string;
    content: string;
    hidden: string;
    style: {
        auto: string;
        dark: string;
        light: string;
    };
    target: string;
}
export interface FlowbiteFloatingArrowTheme {
    base: string;
    placement: string;
    style: {
        dark: string;
        light: string;
        auto: string;
    };
}
export type FloatingStyle = "dark" | "light" | "auto";
export interface FloatingProps extends Omit<ComponentProps<"div">, "content" | "style"> {
    animation?: false | `duration-${number}`;
    arrow?: boolean;
    content: ReactNode;
    placement?: "auto" | Placement;
    style?: FloatingStyle;
    theme: FlowbiteFloatingTheme;
    trigger?: "hover" | "click";
    minWidth?: number;
}
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Floating: FC<FloatingProps>;
