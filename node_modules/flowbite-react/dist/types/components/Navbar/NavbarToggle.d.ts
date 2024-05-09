import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteNavbarToggleTheme {
    base: string;
    icon: string;
}
export interface NavbarToggleProps extends ComponentProps<"button"> {
    barIcon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteNavbarToggleTheme>;
}
export declare const NavbarToggle: FC<NavbarToggleProps>;
