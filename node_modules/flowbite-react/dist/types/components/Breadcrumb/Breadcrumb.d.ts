import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBreadcrumbItemTheme } from "./BreadcrumbItem";
export interface FlowbiteBreadcrumbTheme {
    root: FlowbiteBreadcrumbRootTheme;
    item: FlowbiteBreadcrumbItemTheme;
}
export interface FlowbiteBreadcrumbRootTheme {
    base: string;
    list: string;
}
export interface BreadcrumbComponentProps extends ComponentProps<"nav"> {
    theme?: DeepPartial<FlowbiteBreadcrumbRootTheme>;
}
export declare const Breadcrumb: FC<BreadcrumbComponentProps> & {
    Item: import("react").ForwardRefExoticComponent<import("./BreadcrumbItem").BreadcrumbItemProps & import("react").RefAttributes<HTMLAnchorElement | HTMLSpanElement>>;
};
