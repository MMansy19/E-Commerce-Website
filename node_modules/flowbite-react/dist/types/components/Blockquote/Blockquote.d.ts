import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteBlockquoteTheme {
    root: FlowbiteBlockquoteRootTheme;
}
export interface FlowbiteBlockquoteRootTheme {
    base: string;
}
export interface BlockquoteProps extends ComponentProps<"blockquote"> {
    theme?: DeepPartial<FlowbiteBlockquoteTheme>;
}
export declare const Blockquote: FC<BlockquoteProps>;
