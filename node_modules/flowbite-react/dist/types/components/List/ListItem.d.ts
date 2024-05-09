import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteListItemTheme {
    icon: string;
    withIcon: {
        on: string;
        off: string;
    };
}
export interface ListItemProps extends ComponentProps<"li"> {
    className?: string;
    icon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteListItemTheme>;
}
export declare const ListItem: FC<ListItemProps>;
