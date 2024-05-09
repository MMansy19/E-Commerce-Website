import type { ComponentProps, FC, ReactNode } from "react";
export interface TabItemProps extends Omit<ComponentProps<"div">, "title"> {
    active?: boolean;
    disabled?: boolean;
    icon?: FC<ComponentProps<"svg">>;
    title: ReactNode;
}
export declare const TabItem: FC<TabItemProps>;
