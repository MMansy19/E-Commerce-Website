import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteSidebarLogoTheme {
    base: string;
    collapsed: FlowbiteBoolean;
    img: string;
}
export interface SidebarLogoProps extends ComponentProps<"a"> {
    href: string;
    img: string;
    imgAlt?: string;
    theme?: DeepPartial<FlowbiteSidebarLogoTheme>;
}
export declare const SidebarLogo: FC<SidebarLogoProps>;
