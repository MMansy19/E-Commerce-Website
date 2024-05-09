import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteTableHeadCellTheme } from "./TableHeadCell";
export interface FlowbiteTableHeadTheme {
    base: string;
    cell: FlowbiteTableHeadCellTheme;
}
export interface TableHeadProps extends ComponentPropsWithRef<"thead"> {
    theme?: DeepPartial<FlowbiteTableHeadTheme>;
}
export declare const TableHead: import("react").ForwardRefExoticComponent<Omit<TableHeadProps, "ref"> & import("react").RefAttributes<HTMLTableSectionElement>>;
