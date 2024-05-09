import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterCopyrightTheme {
    base: string;
    href: string;
    span: string;
}
export interface CopyrightProps extends ComponentProps<"div"> {
    by: string;
    href?: string;
    theme?: DeepPartial<FlowbiteFooterCopyrightTheme>;
    year?: number;
}
export declare const FooterCopyright: FC<CopyrightProps>;
