import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import type { FlowbiteNavbarBrandTheme } from "./NavbarBrand";
import type { FlowbiteNavbarCollapseTheme } from "./NavbarCollapse";
import type { FlowbiteNavbarLinkTheme } from "./NavbarLink";
import type { FlowbiteNavbarToggleTheme } from "./NavbarToggle";
export interface FlowbiteNavbarTheme {
    root: FlowbiteNavbarRootTheme;
    brand: FlowbiteNavbarBrandTheme;
    collapse: FlowbiteNavbarCollapseTheme;
    link: FlowbiteNavbarLinkTheme;
    toggle: FlowbiteNavbarToggleTheme;
}
export interface FlowbiteNavbarRootTheme {
    base: string;
    rounded: FlowbiteBoolean;
    bordered: FlowbiteBoolean;
    inner: {
        base: string;
        fluid: FlowbiteBoolean;
    };
}
export interface NavbarComponentProps extends ComponentProps<"nav"> {
    menuOpen?: boolean;
    fluid?: boolean;
    rounded?: boolean;
    border?: boolean;
    theme?: DeepPartial<FlowbiteNavbarTheme>;
}
export declare const Navbar: FC<NavbarComponentProps> & {
    Brand: FC<import("./NavbarBrand").NavbarBrandProps>;
    Collapse: FC<import("./NavbarCollapse").NavbarCollapseProps>;
    Link: FC<import("./NavbarLink").NavbarLinkProps>;
    Toggle: FC<import("./NavbarToggle").NavbarToggleProps>;
};
