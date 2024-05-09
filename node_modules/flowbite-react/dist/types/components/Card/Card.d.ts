import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite";
export interface FlowbiteCardTheme {
    root: FlowbiteCardRootTheme;
    img: FlowbiteCardImageTheme;
}
export interface FlowbiteCardRootTheme {
    base: string;
    children: string;
    horizontal: FlowbiteBoolean;
    href: string;
}
export interface FlowbiteCardImageTheme {
    base: string;
    horizontal: FlowbiteBoolean;
}
interface CommonCardProps extends ComponentProps<"div"> {
    horizontal?: boolean;
    href?: string;
    /** Overwrites the theme. Will be merged with the context theme.
     * @default {}
     */
    theme?: DeepPartial<FlowbiteCardTheme>;
}
export type CardProps = ({
    imgAlt?: string;
    imgSrc?: string;
    renderImage?: never;
} | {
    /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
     */
    renderImage?: (theme: DeepPartial<FlowbiteCardTheme>, horizontal: boolean) => JSX.Element;
    imgAlt?: never;
    imgSrc?: never;
}) & CommonCardProps;
export declare const Card: FC<CardProps>;
export {};
