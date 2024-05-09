import type { FC } from "react";
export interface FlowbiteDatepickerViewsYearsTheme {
    items: {
        base: string;
        item: {
            base: string;
            disabled: string;
            selected: string;
        };
    };
}
export interface DatepickerViewsYearsProps {
    theme?: FlowbiteDatepickerViewsYearsTheme;
}
export declare const DatepickerViewsYears: FC<DatepickerViewsYearsProps>;
