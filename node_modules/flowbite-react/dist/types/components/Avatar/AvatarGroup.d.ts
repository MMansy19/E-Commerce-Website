import type { ComponentProps } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteAvatarGroupTheme {
    base: string;
}
export interface AvatarGroupProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteAvatarGroupTheme>;
}
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
