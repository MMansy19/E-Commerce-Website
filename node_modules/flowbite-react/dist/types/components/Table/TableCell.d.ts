import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTableCellTheme {
    base: string;
}
export interface TableCellProps extends ComponentPropsWithRef<"td"> {
    theme?: DeepPartial<FlowbiteTableCellTheme>;
}
export declare const TableCell: import("react").ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & import("react").RefAttributes<HTMLTableCellElement>>;
