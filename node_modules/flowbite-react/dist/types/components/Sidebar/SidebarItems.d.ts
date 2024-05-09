import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteSidebarItemsTheme {
    base: string;
}
export interface SidebarItemsProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteSidebarItemsTheme>;
}
export declare const SidebarItems: FC<SidebarItemsProps>;
