import type { CustomFlowbiteTheme } from "../../components/Flowbite";
import type { ThemeMode } from "../../hooks/use-theme-mode";
interface Props {
    mode?: ThemeMode;
    theme?: CustomFlowbiteTheme;
}
export declare function ThemeInit({ mode, theme }: Props): import("react/jsx-runtime").JSX.Element;
export {};
