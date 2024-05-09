import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTimelinePointTheme {
    horizontal: string;
    line: string;
    marker: {
        base: {
            horizontal: string;
            vertical: string;
        };
        icon: {
            base: string;
            wrapper: string;
        };
    };
    vertical: string;
}
export interface TimelnePointProps extends ComponentProps<"div"> {
    icon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteTimelinePointTheme>;
}
export declare const TimelinePoint: FC<TimelnePointProps>;
