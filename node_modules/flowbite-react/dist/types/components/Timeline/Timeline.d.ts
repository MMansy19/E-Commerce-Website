import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import { type FlowbiteTimelineItemTheme } from "./TimelineItem";
export interface FlowbiteTimelineTheme {
    root: {
        direction: {
            horizontal: string;
            vertical: string;
        };
    };
    item: FlowbiteTimelineItemTheme;
}
export interface TimelineProps extends ComponentProps<"ol"> {
    horizontal?: boolean;
    theme?: DeepPartial<FlowbiteTimelineTheme>;
}
export declare const Timeline: FC<TimelineProps> & {
    Item: FC<import("./TimelineItem").TimelineItemProps>;
    Point: FC<import("./TimelinePoint").TimelnePointProps>;
    Content: FC<import("./TimelineContent").TimelineContentProps>;
    Time: FC<import("./TimelineTime").TimelineTimeProps>;
    Title: FC<import("./TimelineTitle").TimelineTitleProps>;
    Body: FC<import("./TimelineBody").TimelineBodyProps>;
};
