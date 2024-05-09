import type { FC } from "react";
export interface FlowbiteDatepickerViewsMonthsTheme {
    items: {
        base: string;
        item: {
            base: string;
            selected: string;
            disabled: string;
        };
    };
}
export interface DatepickerViewsMonthsProps {
    theme?: FlowbiteDatepickerViewsMonthsTheme;
}
export declare const DatepickerViewsMonth: FC<DatepickerViewsMonthsProps>;
