import type { CustomFlowbiteTheme, FlowbiteTheme } from "../components/Flowbite";
import type { ThemeMode } from "../hooks/use-theme-mode";
export declare function setThemeMode(mode?: ThemeMode): void;
export declare function getThemeMode(): ThemeMode | undefined;
export declare function setTheme(theme?: CustomFlowbiteTheme): void;
export declare function getTheme(): FlowbiteTheme;
