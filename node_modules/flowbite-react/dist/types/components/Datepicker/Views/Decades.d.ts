import type { FC } from "react";
export interface FlowbiteDatepickerViewsDecadesTheme {
    items: {
        base: string;
        item: {
            base: string;
            selected: string;
            disabled: string;
        };
    };
}
export interface DatepickerViewsDecadesProps {
    theme?: FlowbiteDatepickerViewsDecadesTheme;
}
export declare const DatepickerViewsDecades: FC<DatepickerViewsDecadesProps>;
