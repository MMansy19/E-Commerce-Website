import type { ComponentProps, ElementType, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteNavbarBrandTheme {
    base: string;
}
export interface NavbarBrandProps extends ComponentProps<"a">, Record<string, unknown> {
    as?: ElementType;
    href?: string;
    theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
}
export declare const NavbarBrand: FC<NavbarBrandProps>;
