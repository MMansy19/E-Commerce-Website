import type { FC } from "react";
import type { DeepPartial } from "../../../types";
export interface FlowbiteDatepickerViewsDaysTheme {
    header: {
        base: string;
        title: string;
    };
    items: {
        base: string;
        item: {
            base: string;
            selected: string;
            disabled: string;
        };
    };
}
export interface DatepickerViewsDaysProps {
    theme?: DeepPartial<FlowbiteDatepickerViewsDaysTheme>;
}
export declare const DatepickerViewsDays: FC<DatepickerViewsDaysProps>;
