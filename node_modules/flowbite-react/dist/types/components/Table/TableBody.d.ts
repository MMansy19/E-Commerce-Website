import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteTableCellTheme } from "./TableCell";
export interface FlowbiteTableBodyTheme {
    base: string;
    cell: FlowbiteTableCellTheme;
}
export interface TableBodyProps extends ComponentPropsWithRef<"tbody"> {
    theme?: DeepPartial<FlowbiteTableBodyTheme>;
}
export declare const TableBody: import("react").ForwardRefExoticComponent<Omit<TableBodyProps, "ref"> & import("react").RefAttributes<HTMLTableSectionElement>>;
