import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterDividerTheme {
    base: string;
}
export interface FooterDividerProps extends ComponentProps<"hr"> {
    theme?: DeepPartial<FlowbiteFooterDividerTheme>;
}
export declare const FooterDivider: FC<FooterDividerProps>;
