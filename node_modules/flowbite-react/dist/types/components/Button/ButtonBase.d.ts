import type { ComponentPropsWithoutRef, ElementType } from "react";
export type ButtonBaseProps<T extends ElementType = "button"> = {
    as?: T;
    href?: string;
} & ComponentPropsWithoutRef<T>;
export declare const ButtonBase: import("react").ForwardRefExoticComponent<Omit<ButtonBaseProps<ElementType>, "ref"> & import("react").RefAttributes<ElementType>>;
