import { type ComponentProps, type ElementType, type FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteModalHeaderTheme {
    base: string;
    popup: string;
    title: string;
    close: {
        base: string;
        icon: string;
    };
}
export interface ModalHeaderProps extends ComponentProps<"div"> {
    as?: ElementType;
    theme?: DeepPartial<FlowbiteModalHeaderTheme>;
}
export declare const ModalHeader: FC<ModalHeaderProps>;
