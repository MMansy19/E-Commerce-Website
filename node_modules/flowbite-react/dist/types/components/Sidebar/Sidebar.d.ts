import type { ComponentProps, ElementType, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import { type FlowbiteSidebarCollapseTheme } from "./SidebarCollapse";
import { type FlowbiteSidebarCTATheme } from "./SidebarCTA";
import { type FlowbiteSidebarItemTheme } from "./SidebarItem";
import { type FlowbiteSidebarItemGroupTheme } from "./SidebarItemGroup";
import { type FlowbiteSidebarItemsTheme } from "./SidebarItems";
import { type FlowbiteSidebarLogoTheme } from "./SidebarLogo";
export interface FlowbiteSidebarTheme {
    root: {
        base: string;
        collapsed: FlowbiteBoolean;
        inner: string;
    };
    collapse: FlowbiteSidebarCollapseTheme;
    cta: FlowbiteSidebarCTATheme;
    item: FlowbiteSidebarItemTheme;
    items: FlowbiteSidebarItemsTheme;
    itemGroup: FlowbiteSidebarItemGroupTheme;
    logo: FlowbiteSidebarLogoTheme;
}
export interface SidebarProps extends ComponentProps<"div"> {
    as?: ElementType;
    collapseBehavior?: "collapse" | "hide";
    collapsed?: boolean;
    theme?: DeepPartial<FlowbiteSidebarTheme>;
}
export declare const Sidebar: FC<SidebarProps> & {
    Collapse: FC<import("./SidebarCollapse").SidebarCollapseProps>;
    CTA: FC<import("./SidebarCTA").SidebarCTAProps>;
    Item: import("react").ForwardRefExoticComponent<Omit<import("./SidebarItem").SidebarItemProps, "ref"> & import("react").RefAttributes<Element>>;
    Items: FC<import("./SidebarItems").SidebarItemsProps>;
    ItemGroup: FC<import("./SidebarItemGroup").SidebarItemGroupProps>;
    Logo: FC<import("./SidebarLogo").SidebarLogoProps>;
};
