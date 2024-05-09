import type { FC } from "react";
import type { FlowbiteNavbarTheme, NavbarComponentProps } from "../Navbar";
import { FlowbiteMegaMenuDropdownTheme } from "./MegaMenuDropdown";
import { FlowbiteMegaMenuDropdownToggleTheme } from "./MegaMenuDropdownToggle";
export interface FlowbiteMegaMenuTheme extends FlowbiteNavbarTheme {
    dropdown: FlowbiteMegaMenuDropdownTheme;
    dropdownToggle: FlowbiteMegaMenuDropdownToggleTheme;
}
export type MegaMenuProps = NavbarComponentProps;
export declare const MegaMenu: FC<NavbarComponentProps> & {
    Dropdown: FC<import("./MegaMenuDropdown").MegaMenuDropdownProps>;
    DropdownToggle: FC<import("./MegaMenuDropdownToggle").MegaMenuDropdownToggleProps>;
};
