import type { FC } from "react";
import type { ThemeMode } from "../../hooks/use-theme-mode";
import type { CustomFlowbiteTheme } from "./FlowbiteTheme";
export interface ThemeProps {
    mode?: ThemeMode;
    theme?: CustomFlowbiteTheme;
}
interface FlowbiteProps {
    children: React.ReactNode;
    theme?: ThemeProps;
}
export declare const Flowbite: FC<FlowbiteProps>;
export {};
