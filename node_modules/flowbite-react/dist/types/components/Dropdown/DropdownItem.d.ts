import { type ComponentProps, type ElementType, type FC } from "react";
import type { PolymorphicComponentPropWithRef } from "../../helpers/generic-as-prop";
import type { DeepPartial } from "../../types";
export interface FlowbiteDropdownItemTheme {
    container: string;
    base: string;
    icon: string;
}
export type DropdownItemProps<T extends ElementType = "button"> = PolymorphicComponentPropWithRef<T, {
    href?: string;
    icon?: FC<ComponentProps<"svg">>;
    onClick?: () => void;
    theme?: DeepPartial<FlowbiteDropdownItemTheme>;
}>;
type DropdownItemType = (<C extends ElementType = "button">(props: DropdownItemProps<C>) => JSX.Element) & {
    displayName?: string;
};
export declare const DropdownItem: DropdownItemType;
export {};
