import type { ComponentProps, FC, ReactNode } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteCarouselTheme {
    root: FlowbiteCarouselRootTheme;
    indicators: FlowbiteCarouselIndicatorsTheme;
    item: FlowbiteCarouselItemTheme;
    control: FlowbiteCarouselControlTheme;
    scrollContainer: FlowbiteCarouselScrollContainer;
}
export interface FlowbiteCarouselRootTheme {
    base: string;
    leftControl: string;
    rightControl: string;
}
export interface FlowbiteCarouselIndicatorsTheme {
    active: FlowbiteBoolean;
    base: string;
    wrapper: string;
}
export interface FlowbiteCarouselItemTheme {
    base: string;
    wrapper: FlowbiteBoolean;
}
export interface FlowbiteCarouselControlTheme {
    base: string;
    icon: string;
}
export interface FlowbiteCarouselScrollContainer {
    base: string;
    snap: string;
}
export interface CarouselProps extends ComponentProps<"div"> {
    indicators?: boolean;
    leftControl?: ReactNode;
    rightControl?: ReactNode;
    draggable?: boolean;
    slide?: boolean;
    slideInterval?: number;
    theme?: DeepPartial<FlowbiteCarouselTheme>;
    onSlideChange?: (slide: number) => void;
    pauseOnHover?: boolean;
}
export interface DefaultLeftRightControlProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteCarouselTheme>;
}
export declare const Carousel: FC<CarouselProps>;
