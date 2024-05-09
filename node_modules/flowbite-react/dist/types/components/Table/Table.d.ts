import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
import { type FlowbiteTableBodyTheme } from "./TableBody";
import { type FlowbiteTableHeadTheme } from "./TableHead";
import { type FlowbiteTableRowTheme } from "./TableRow";
export interface FlowbiteTableTheme {
    root: FlowbiteTableRootTheme;
    head: FlowbiteTableHeadTheme;
    row: FlowbiteTableRowTheme;
    body: FlowbiteTableBodyTheme;
}
export interface FlowbiteTableRootTheme {
    base: string;
    shadow: string;
    wrapper: string;
}
export interface TableProps extends ComponentPropsWithRef<"table"> {
    striped?: boolean;
    hoverable?: boolean;
    theme?: DeepPartial<FlowbiteTableTheme>;
}
export declare const Table: import("react").ForwardRefExoticComponent<Omit<TableProps, "ref"> & import("react").RefAttributes<HTMLTableElement>> & {
    Head: import("react").ForwardRefExoticComponent<Omit<import("./TableHead").TableHeadProps, "ref"> & import("react").RefAttributes<HTMLTableSectionElement>>;
    Body: import("react").ForwardRefExoticComponent<Omit<import("./TableBody").TableBodyProps, "ref"> & import("react").RefAttributes<HTMLTableSectionElement>>;
    Row: import("react").ForwardRefExoticComponent<Omit<import("./TableRow").TableRowProps, "ref"> & import("react").RefAttributes<HTMLTableRowElement>>;
    Cell: import("react").ForwardRefExoticComponent<Omit<import("./TableCell").TableCellProps, "ref"> & import("react").RefAttributes<HTMLTableCellElement>>;
    HeadCell: import("react").ForwardRefExoticComponent<Omit<import("./TableHeadCell").TableHeadCellProps, "ref"> & import("react").RefAttributes<HTMLTableCellElement>>;
};
