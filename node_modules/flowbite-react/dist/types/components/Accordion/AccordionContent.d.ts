import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
export interface FlowbiteAccordionComponentTheme {
    base: string;
}
export interface AccordionContentProps extends ComponentProps<"div"> {
    theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
}
export declare const AccordionContent: FC<AccordionContentProps>;
