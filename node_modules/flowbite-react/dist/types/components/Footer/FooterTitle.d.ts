import type { ComponentProps, ElementType, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterTitleTheme {
    base: string;
}
export interface FooterTitleProps extends ComponentProps<"h2"> {
    as?: ElementType;
    theme?: DeepPartial<FlowbiteFooterTitleTheme>;
    title: string;
}
export declare const FooterTitle: FC<FooterTitleProps>;
