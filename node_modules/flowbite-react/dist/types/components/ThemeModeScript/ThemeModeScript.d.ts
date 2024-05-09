import React from "react";
import type { ThemeMode } from "../../hooks/use-theme-mode";
export interface ThemeModeScriptProps extends React.ComponentPropsWithoutRef<"script"> {
    mode?: ThemeMode;
}
export declare const ThemeModeScript: ({ mode, ...others }: ThemeModeScriptProps) => import("react/jsx-runtime").JSX.Element;
