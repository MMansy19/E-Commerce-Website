import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteRatingAdvancedTheme {
    base: string;
    label: string;
    progress: {
        base: string;
        fill: string;
        label: string;
    };
}
export interface RatingAdvancedProps extends ComponentProps<"div"> {
    percentFilled?: number;
    theme?: DeepPartial<FlowbiteRatingAdvancedTheme>;
}
export declare const RatingAdvanced: FC<RatingAdvancedProps>;
