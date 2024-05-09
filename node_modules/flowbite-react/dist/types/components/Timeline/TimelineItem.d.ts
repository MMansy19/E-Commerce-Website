import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteTimelineContentTheme } from "./TimelineContent";
import type { FlowbiteTimelinePointTheme } from "./TimelinePoint";
export interface FlowbiteTimelineItemTheme {
    root: {
        horizontal: string;
        vertical: string;
    };
    content: FlowbiteTimelineContentTheme;
    point: FlowbiteTimelinePointTheme;
}
export interface TimelineItemProps extends ComponentProps<"li"> {
    theme?: DeepPartial<FlowbiteTimelineItemTheme>;
}
export declare const TimelineItem: FC<TimelineItemProps>;
