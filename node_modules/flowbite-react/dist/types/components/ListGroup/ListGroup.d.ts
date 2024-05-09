import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteListGroupItemTheme } from "./ListGroupItem";
export interface FlowbiteListGroupTheme {
    root: FlowbiteListGroupRootTheme;
    item: FlowbiteListGroupItemTheme;
}
export interface FlowbiteListGroupRootTheme {
    base: string;
}
export interface ListGroupProps extends ComponentProps<"ul"> {
    theme?: DeepPartial<FlowbiteListGroupTheme>;
}
export declare const ListGroup: FC<ListGroupProps> & {
    Item: FC<import("./ListGroupItem").ListGroupItemProps & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement>>;
};
