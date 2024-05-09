import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteDropdownHeaderTheme {
    header: string;
}
export interface DropdownHeaderProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteDropdownHeaderTheme>;
}
export declare const DropdownHeader: FC<DropdownHeaderProps>;
