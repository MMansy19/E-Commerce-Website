import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import { type FlowbiteDrawerHeaderTheme } from "./DrawerHeader";
import { type FlowbiteDrawerItemsTheme } from "./DrawerItems";
export interface FlowbiteDrawerTheme {
    root: FlowbiteDrawerRootTheme;
    header: FlowbiteDrawerHeaderTheme;
    items: FlowbiteDrawerItemsTheme;
}
export interface FlowbiteDrawerRootTheme {
    base: string;
    backdrop: string;
    edge: string;
    position: {
        top: FlowbiteBoolean;
        right: FlowbiteBoolean;
        bottom: FlowbiteBoolean;
        left: FlowbiteBoolean;
    };
}
export interface DrawerProps extends ComponentProps<"div"> {
    backdrop?: boolean;
    edge?: boolean;
    onClose: () => void;
    open?: boolean;
    position?: "top" | "right" | "bottom" | "left";
    theme?: DeepPartial<FlowbiteDrawerTheme>;
}
export declare const Drawer: FC<DrawerProps> & {
    Header: FC<import("./DrawerHeader").DrawerHeaderProps>;
    Items: FC<import("./DrawerItems").DrawerItemsProps>;
};
