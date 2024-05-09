import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { Duration } from "./ToastContext";
export interface FlowbiteToastTheme {
    root: {
        base: string;
        closed: string;
    };
    toggle: {
        base: string;
        icon: string;
    };
}
export interface ToastProps extends ComponentProps<"div"> {
    duration?: Duration;
    theme?: DeepPartial<FlowbiteToastTheme>;
}
export declare const Toast: FC<ToastProps> & {
    Toggle: FC<import("./ToastToggle").ToastToggleProps>;
};
