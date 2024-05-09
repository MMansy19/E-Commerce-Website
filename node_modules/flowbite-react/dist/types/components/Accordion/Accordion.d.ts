import type { ComponentProps, FC, ReactElement } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
import type { FlowbiteAccordionComponentTheme } from "./AccordionContent";
import type { AccordionPanelProps } from "./AccordionPanel";
import type { FlowbiteAccordionTitleTheme } from "./AccordionTitle";
export interface FlowbiteAccordionTheme {
    root: FlowbiteAccordionRootTheme;
    content: FlowbiteAccordionComponentTheme;
    title: FlowbiteAccordionTitleTheme;
}
export interface FlowbiteAccordionRootTheme {
    base: string;
    flush: FlowbiteBoolean;
}
export interface AccordionProps extends ComponentProps<"div"> {
    alwaysOpen?: boolean;
    arrowIcon?: FC<ComponentProps<"svg">>;
    children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
    flush?: boolean;
    collapseAll?: boolean;
    theme?: DeepPartial<FlowbiteAccordionTheme>;
}
export declare const Accordion: FC<AccordionProps> & {
    Panel: FC<AccordionPanelProps>;
    Title: FC<import("./AccordionTitle").AccordionTitleProps>;
    Content: FC<import("./AccordionContent").AccordionContentProps>;
};
