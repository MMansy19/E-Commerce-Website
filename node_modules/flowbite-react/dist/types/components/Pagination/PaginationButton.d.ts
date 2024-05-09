import type { ComponentProps, FC, ReactEventHandler, ReactNode } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbitePaginationButtonTheme {
    base: string;
    active: string;
    disabled: string;
}
export interface PaginationButtonProps extends ComponentProps<"button"> {
    active?: boolean;
    children?: ReactNode;
    className?: string;
    onClick?: ReactEventHandler<HTMLButtonElement>;
    theme?: DeepPartial<FlowbitePaginationButtonTheme>;
}
export interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, "active"> {
    disabled?: boolean;
}
export declare const PaginationButton: FC<PaginationButtonProps>;
export declare const PaginationNavigation: FC<PaginationPrevButtonProps>;
