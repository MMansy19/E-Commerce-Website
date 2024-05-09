import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteSizes } from "../Flowbite";
export interface FlowbiteRatingStarTheme {
    empty: string;
    filled: string;
    sizes: FlowbiteStarSizes;
}
export interface FlowbiteStarSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
    [key: string]: string;
}
export interface RatingStarProps extends ComponentProps<"svg"> {
    filled?: boolean;
    starIcon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteRatingStarTheme>;
}
export declare const RatingStar: FC<RatingStarProps>;
