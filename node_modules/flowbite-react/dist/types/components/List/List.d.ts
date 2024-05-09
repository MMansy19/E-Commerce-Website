import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { FlowbiteListItemTheme, FlowbiteStateColors } from "../..";
import type { DeepPartial } from "../../types";
export interface FlowbiteListTheme {
    root: FlowbiteListRootTheme;
    item: FlowbiteListItemTheme;
}
export interface FlowbiteListRootTheme {
    base: string;
    ordered: {
        on: string;
        off: string;
    };
    horizontal: string;
    unstyled: string;
    nested: string;
}
export interface ListColors extends FlowbiteStateColors {
    [key: string]: string;
    default: string;
}
export interface ListProps extends PropsWithChildren<ComponentProps<"ul"> & ComponentProps<"ol">> {
    theme?: DeepPartial<FlowbiteListTheme>;
    ordered?: boolean;
    unstyled?: boolean;
    nested?: boolean;
    horizontal?: boolean;
}
export declare const List: FC<ListProps> & {
    Item: FC<import("./ListItem").ListItemProps>;
};
