import type { ComponentProps, ElementType, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteNavbarLinkTheme {
    base: string;
    active: FlowbiteBoolean;
    disabled: FlowbiteBoolean;
}
export interface NavbarLinkProps extends ComponentProps<"a">, Record<string, unknown> {
    active?: boolean;
    as?: ElementType;
    disabled?: boolean;
    href?: string;
    theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
}
export declare const NavbarLink: FC<NavbarLinkProps>;
