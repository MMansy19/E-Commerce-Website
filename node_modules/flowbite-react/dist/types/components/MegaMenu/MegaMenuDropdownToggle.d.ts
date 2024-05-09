import { type ComponentProps, type FC } from "react";
import { DeepPartial } from "../../types";
export interface FlowbiteMegaMenuDropdownToggleTheme {
    base: string;
}
export interface MegaMenuDropdownToggleProps extends ComponentProps<"button"> {
    theme?: DeepPartial<FlowbiteMegaMenuDropdownToggleTheme>;
}
export declare const MegaMenuDropdownToggle: FC<MegaMenuDropdownToggleProps>;
