/**
 * Triggers `onChange` when another browser tab instance mutates the LS value.
 */
export declare const useWatchLocalStorageValue: ({ key: watchKey, onChange, }: {
    key: string;
    onChange(newValue: string | null): void;
}) => void;
