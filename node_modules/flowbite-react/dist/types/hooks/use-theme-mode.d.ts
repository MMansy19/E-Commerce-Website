export type ThemeMode = "light" | "dark" | "auto";
export declare const useThemeMode: () => {
    mode: ThemeMode;
    computedMode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
    clearMode: () => void;
};
