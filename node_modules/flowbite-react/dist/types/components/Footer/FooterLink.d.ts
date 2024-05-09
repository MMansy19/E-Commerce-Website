import type { ComponentProps, ElementType, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterLinkTheme {
    base: string;
    href: string;
}
export interface FooterLinkProps extends ComponentProps<"a"> {
    as?: ElementType;
    href: string;
    theme?: DeepPartial<FlowbiteFooterLinkTheme>;
}
export declare const FooterLink: FC<FooterLinkProps>;
