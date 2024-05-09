import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteBreadcrumbItemTheme {
    base: string;
    chevron: string;
    href: FlowbiteBoolean;
    icon: string;
}
export interface BreadcrumbItemProps extends Omit<ComponentProps<"li">, "ref"> {
    href?: string;
    icon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteBreadcrumbItemTheme>;
}
export declare const BreadcrumbItem: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLAnchorElement | HTMLSpanElement>>;
