import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean, FlowbiteHeadingLevel } from "../Flowbite";
export interface FlowbiteAccordionTitleTheme {
    arrow: {
        base: string;
        open: FlowbiteBoolean;
    };
    base: string;
    flush: FlowbiteBoolean;
    heading: string;
    open: FlowbiteBoolean;
}
export interface AccordionTitleProps extends ComponentProps<"button"> {
    arrowIcon?: FC<ComponentProps<"svg">>;
    as?: FlowbiteHeadingLevel;
    theme?: DeepPartial<FlowbiteAccordionTitleTheme>;
}
export declare const AccordionTitle: FC<AccordionTitleProps>;
