import type { ComponentPropsWithoutRef } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteFloatingLabelTheme } from "./theme";
export type FloatingLabelColor = "default" | "success" | "error";
export type FloatingLabelSizing = "sm" | "md";
export type FloatingLabelVariant = "filled" | "outlined" | "standard";
export interface FloatingLabelProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
    helperText?: string;
    color?: FloatingLabelColor;
    sizing?: FloatingLabelSizing;
    variant: FloatingLabelVariant;
    disabled?: boolean;
    theme?: DeepPartial<FlowbiteFloatingLabelTheme>;
}
export declare const FloatingLabel: import("react").ForwardRefExoticComponent<FloatingLabelProps & import("react").RefAttributes<HTMLInputElement>>;
