import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteToastToggleTheme {
    base: string;
    icon: string;
}
export interface ToastToggleProps extends ComponentProps<"button"> {
    theme?: DeepPartial<FlowbiteToastToggleTheme>;
    xIcon?: FC<ComponentProps<"svg">>;
    onDismiss?: () => void;
}
export declare const ToastToggle: FC<ToastToggleProps>;
