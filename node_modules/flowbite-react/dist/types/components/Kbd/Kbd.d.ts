import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteKbdTheme {
    root: FlowbiteKbdRootTheme;
}
export interface FlowbiteKbdRootTheme {
    base: string;
    icon: string;
}
export interface KbdProps extends ComponentProps<"span"> {
    icon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteKbdTheme>;
}
export declare const Kbd: FC<KbdProps>;
