import type { FC } from "react";
import type { AccordionProps } from "./Accordion";
export interface AccordionPanelProps extends AccordionProps {
    isOpen?: boolean;
    setOpen?: () => void;
}
export declare const AccordionPanel: FC<AccordionPanelProps>;
