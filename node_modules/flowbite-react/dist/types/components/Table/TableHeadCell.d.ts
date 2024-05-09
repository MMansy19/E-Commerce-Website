import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTableHeadCellTheme {
    base: string;
}
export interface TableHeadCellProps extends ComponentPropsWithRef<"th"> {
    theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
}
export declare const TableHeadCell: import("react").ForwardRefExoticComponent<Omit<TableHeadCellProps, "ref"> & import("react").RefAttributes<HTMLTableCellElement>>;
