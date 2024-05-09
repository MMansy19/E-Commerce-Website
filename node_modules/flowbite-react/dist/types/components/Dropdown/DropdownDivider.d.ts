import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteDropdownDividerTheme {
    divider: string;
}
export type DropdownDividerProps = {
    theme?: DeepPartial<FlowbiteDropdownDividerTheme>;
} & ComponentProps<"div">;
export declare const DropdownDivider: FC<DropdownDividerProps>;
