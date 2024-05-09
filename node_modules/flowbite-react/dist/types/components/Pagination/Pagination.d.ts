import type { ComponentProps, FC, ReactNode } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbitePaginationButtonTheme, PaginationButtonProps } from "./PaginationButton";
export interface FlowbitePaginationTheme {
    base: string;
    layout: FlowbitePaginationLayoutTheme;
    pages: FlowbitePaginationPagesTheme;
}
export interface FlowbitePaginationRootTheme {
    base: string;
}
export interface FlowbitePaginationLayoutTheme {
    table: {
        base: string;
        span: string;
    };
}
export interface FlowbitePaginationPagesTheme {
    base: string;
    showIcon: string;
    previous: FlowbitePaginationNavigationTheme;
    next: FlowbitePaginationNavigationTheme;
    selector: FlowbitePaginationButtonTheme;
}
export interface FlowbitePaginationNavigationTheme {
    base: string;
    icon: string;
}
export interface PaginationProps extends ComponentProps<"nav"> {
    currentPage: number;
    layout?: "navigation" | "pagination" | "table";
    nextLabel?: string;
    onPageChange: (page: number) => void;
    previousLabel?: string;
    renderPaginationButton?: (props: PaginationButtonProps) => ReactNode;
    showIcons?: boolean;
    theme?: DeepPartial<FlowbitePaginationTheme>;
    totalPages: number;
}
export declare const Pagination: FC<PaginationProps> & {
    Button: FC<PaginationButtonProps>;
};
