import type { ComponentProps } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteRadioTheme {
    root: FlowbiteRadioRootTheme;
}
export interface FlowbiteRadioRootTheme {
    base: string;
}
export interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
    theme?: DeepPartial<FlowbiteRadioTheme>;
}
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
