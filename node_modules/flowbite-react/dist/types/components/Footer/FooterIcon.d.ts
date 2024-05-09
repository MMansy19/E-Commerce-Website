import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteFooterIconTheme {
    base: string;
    size: string;
}
export interface FooterIconProps extends PropsWithChildren {
    ariaLabel?: string;
    className?: string;
    href?: string;
    icon: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteFooterIconTheme>;
}
export declare const FooterIcon: FC<FooterIconProps & ComponentProps<"a"> & ComponentProps<"svg">>;
