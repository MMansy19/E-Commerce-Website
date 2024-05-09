import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteModalBodyTheme {
    base: string;
    popup: string;
}
export interface ModalBodyProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteModalBodyTheme>;
}
export declare const ModalBody: FC<ModalBodyProps>;
