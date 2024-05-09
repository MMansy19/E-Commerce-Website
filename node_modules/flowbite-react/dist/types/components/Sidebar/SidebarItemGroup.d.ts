import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteSidebarItemGroupTheme {
    base: string;
}
export interface SidebarItemGroupProps extends ComponentProps<"ul"> {
    theme?: DeepPartial<FlowbiteSidebarItemGroupTheme>;
}
export declare const SidebarItemGroup: FC<SidebarItemGroupProps>;
