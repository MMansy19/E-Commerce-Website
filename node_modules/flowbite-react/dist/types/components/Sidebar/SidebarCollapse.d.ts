import type { ComponentProps, FC, ReactElement } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import type { SidebarItemProps } from "./SidebarItem";
export interface FlowbiteSidebarCollapseTheme {
    button: string;
    icon: {
        base: string;
        open: FlowbiteBoolean;
    };
    label: {
        base: string;
        icon: {
            base: string;
            open: FlowbiteBoolean;
        };
    };
    list: string;
}
export interface SidebarCollapseProps extends Pick<SidebarItemProps, "active" | "as" | "href" | "icon" | "label" | "labelColor">, ComponentProps<"button"> {
    onClick?: ComponentProps<"button">["onClick"];
    open?: boolean;
    chevronIcon?: FC<ComponentProps<"svg">>;
    renderChevronIcon?: (theme: FlowbiteSidebarCollapseTheme, open: boolean) => ReactElement;
    theme?: DeepPartial<FlowbiteSidebarCollapseTheme>;
}
export declare const SidebarCollapse: FC<SidebarCollapseProps>;
