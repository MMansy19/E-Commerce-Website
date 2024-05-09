import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTimelineBodyTheme {
    base: string;
}
export interface TimelineBodyProps extends ComponentProps<"p"> {
    theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
}
export declare const TimelineBody: FC<TimelineBodyProps>;
