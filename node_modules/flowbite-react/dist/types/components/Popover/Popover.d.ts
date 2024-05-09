import type { Placement } from "@floating-ui/react";
import type { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteFloatingArrowTheme } from "../Floating";
export interface FlowbitePopoverTheme {
    arrow: Omit<FlowbiteFloatingArrowTheme, "style">;
    base: string;
    content: string;
}
export interface PopoverProps extends Omit<ComponentProps<"div">, "content" | "style"> {
    arrow?: boolean;
    content: ReactNode;
    placement?: "auto" | Placement;
    theme?: DeepPartial<FlowbitePopoverTheme>;
    trigger?: "hover" | "click";
    initialOpen?: boolean;
    open?: boolean;
    onOpenChange?: Dispatch<SetStateAction<boolean>>;
}
export declare function Popover({ children, content, theme: customTheme, arrow, trigger, initialOpen, open: controlledOpen, onOpenChange: setControlledOpen, placement: theirPlacement, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
