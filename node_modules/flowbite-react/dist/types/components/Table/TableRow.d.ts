import { type ComponentPropsWithRef } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTableRowTheme {
    base: string;
    hovered: string;
    striped: string;
}
export interface TableRowProps extends ComponentPropsWithRef<"tr"> {
    theme?: DeepPartial<FlowbiteTableRowTheme>;
}
export declare const TableRow: import("react").ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & import("react").RefAttributes<HTMLTableRowElement>>;
