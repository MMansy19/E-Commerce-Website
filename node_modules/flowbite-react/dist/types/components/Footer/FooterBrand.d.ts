import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterBrandTheme {
    base: string;
    img: string;
    span: string;
}
export interface FooterBrandProps extends PropsWithChildren {
    alt?: string;
    className?: string;
    href?: string;
    name?: string;
    src: string;
    theme?: DeepPartial<FlowbiteFooterBrandTheme>;
}
export declare const FooterBrand: FC<FooterBrandProps & ComponentProps<"a"> & ComponentProps<"img">>;
