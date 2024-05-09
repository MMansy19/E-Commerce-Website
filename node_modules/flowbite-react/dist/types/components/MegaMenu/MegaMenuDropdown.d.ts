import { type ComponentProps, type FC } from "react";
import { FlowbiteDropdownTheme } from "../Dropdown";
export interface FlowbiteMegaMenuDropdownTheme {
    base: string;
    toggle: FlowbiteDropdownTheme;
}
export interface MegaMenuDropdownProps extends ComponentProps<"div"> {
    theme?: FlowbiteMegaMenuDropdownTheme;
    toggle?: JSX.Element;
}
export declare const MegaMenuDropdown: FC<MegaMenuDropdownProps>;
