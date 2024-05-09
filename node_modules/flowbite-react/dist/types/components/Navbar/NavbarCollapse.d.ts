import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteNavbarCollapseTheme {
    base: string;
    list: string;
    hidden: FlowbiteBoolean;
}
export interface NavbarCollapseProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
}
export declare const NavbarCollapse: FC<NavbarCollapseProps>;
