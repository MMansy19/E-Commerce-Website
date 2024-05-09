import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteModalFooterTheme {
    base: string;
    popup: string;
}
export interface ModalFooterProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteModalFooterTheme>;
}
export declare const ModalFooter: FC<ModalFooterProps>;
