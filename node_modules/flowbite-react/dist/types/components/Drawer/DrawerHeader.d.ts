import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteDrawerHeaderTheme {
    inner: {
        titleIcon: string;
        titleText: string;
        closeButton: string;
        closeIcon: string;
    };
    collapsed: FlowbiteBoolean;
}
export interface DrawerHeaderProps extends ComponentProps<"div">, Record<string, unknown> {
    closeIcon?: FC<ComponentProps<"svg">>;
    theme?: DeepPartial<FlowbiteDrawerHeaderTheme>;
    title?: string;
    titleIcon?: FC<ComponentProps<"svg">>;
}
export declare const DrawerHeader: FC<DrawerHeaderProps>;
