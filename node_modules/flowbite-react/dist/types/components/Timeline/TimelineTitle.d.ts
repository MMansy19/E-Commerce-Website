import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteHeadingLevel } from "../Flowbite";
export interface FlowbiteTimelineTitleTheme {
    base: string;
}
export interface TimelineTitleProps extends ComponentProps<"h1"> {
    as?: FlowbiteHeadingLevel;
    theme?: DeepPartial<FlowbiteTimelineTitleTheme>;
}
export declare const TimelineTitle: FC<TimelineTitleProps>;
