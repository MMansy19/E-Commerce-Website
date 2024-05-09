import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteAvatarGroupCounterTheme {
    base: string;
}
export interface AvatarGroupCounterProps extends ComponentProps<"a"> {
    theme?: DeepPartial<FlowbiteAvatarGroupCounterTheme>;
    total?: number;
}
export declare const AvatarGroupCounter: FC<AvatarGroupCounterProps>;
