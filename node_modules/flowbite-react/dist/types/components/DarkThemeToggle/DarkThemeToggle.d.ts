import type { ComponentProps, FC } from "react";
import type { IconBaseProps } from "react-icons";
import type { DeepPartial } from "../../types";
export interface FlowbiteDarkThemeToggleTheme {
    root: FlowbiteDarkThemeToggleRootTheme;
}
export interface FlowbiteDarkThemeToggleRootTheme {
    base: string;
    icon: string;
}
export interface DarkThemeToggleProps extends ComponentProps<"button"> {
    iconDark?: FC<IconBaseProps>;
    iconLight?: FC<IconBaseProps>;
    theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}
export declare const DarkThemeToggle: FC<DarkThemeToggleProps>;
