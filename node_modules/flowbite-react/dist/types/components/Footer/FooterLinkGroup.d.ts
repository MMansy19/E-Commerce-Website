import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteFooterLinkTheme } from "./FooterLink";
export interface FlowbiteFooterLinkGroupTheme {
    base: string;
    link: FlowbiteFooterLinkTheme;
    col: string;
}
export interface FooterLinkGroupProps extends ComponentProps<"ul"> {
    col?: boolean;
    theme?: DeepPartial<FlowbiteFooterLinkGroupTheme>;
}
export declare const FooterLinkGroup: FC<FooterLinkGroupProps>;
