import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteTimelineTimeTheme {
    base: string;
}
export interface TimelineTimeProps extends ComponentProps<"time"> {
    theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
}
export declare const TimelineTime: FC<TimelineTimeProps>;
