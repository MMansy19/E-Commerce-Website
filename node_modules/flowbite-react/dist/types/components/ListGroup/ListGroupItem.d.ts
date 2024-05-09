import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteListGroupItemTheme {
    base: string;
    link: {
        base: string;
        active: FlowbiteBoolean;
        disabled: FlowbiteBoolean;
        href: FlowbiteBoolean;
        icon: string;
    };
}
export interface ListGroupItemProps extends PropsWithChildren {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    icon?: FC<ComponentProps<"svg">>;
    onClick?: () => void;
    theme?: DeepPartial<FlowbiteListGroupItemTheme>;
}
export declare const ListGroupItem: FC<ListGroupItemProps & ComponentProps<"a"> & ComponentProps<"button">>;
