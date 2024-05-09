import type { ComponentProps, FC } from "react";
export type BannerComponentProps = ComponentProps<"div">;
export declare const Banner: FC<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
    CollapseButton: FC<import("./BannerCollapseButton").BannerCollapseButtonProps>;
};
