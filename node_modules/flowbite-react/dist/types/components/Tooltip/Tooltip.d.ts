import type { Placement } from "@floating-ui/core";
import type { ComponentProps, FC, ReactNode } from "react";
import type { DeepPartial } from "../../types";
import { type FlowbiteFloatingTheme } from "../Floating";
export type FlowbiteTooltipTheme = FlowbiteFloatingTheme;
export interface TooltipProps extends Omit<ComponentProps<"div">, "content" | "style"> {
    animation?: false | `duration-${number}`;
    arrow?: boolean;
    content: ReactNode;
    placement?: "auto" | Placement;
    style?: "dark" | "light" | "auto";
    theme?: DeepPartial<FlowbiteTooltipTheme>;
    trigger?: "hover" | "click";
}
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Tooltip: FC<TooltipProps>;
