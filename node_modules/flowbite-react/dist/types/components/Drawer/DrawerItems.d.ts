import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteDrawerItemsTheme {
    base: string;
}
export interface DrawerItemsProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteDrawerItemsTheme>;
}
export declare const DrawerItems: FC<DrawerItemsProps>;
