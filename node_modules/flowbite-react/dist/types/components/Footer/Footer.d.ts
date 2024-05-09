import type { ComponentProps, FC } from "react";
import type { DeepPartial } from "../../types";
import type { FlowbiteFooterBrandTheme } from "./FooterBrand";
import type { FlowbiteFooterCopyrightTheme } from "./FooterCopyright";
import type { FlowbiteFooterDividerTheme } from "./FooterDivider";
import type { FlowbiteFooterIconTheme } from "./FooterIcon";
import type { FlowbiteFooterLinkGroupTheme } from "./FooterLinkGroup";
import type { FlowbiteFooterTitleTheme } from "./FooterTitle";
export interface FlowbiteFooterTheme {
    brand: FlowbiteFooterBrandTheme;
    copyright: FlowbiteFooterCopyrightTheme;
    divider: FlowbiteFooterDividerTheme;
    groupLink: FlowbiteFooterLinkGroupTheme;
    icon: FlowbiteFooterIconTheme;
    root: FlowbiteFooterRootTheme;
    title: FlowbiteFooterTitleTheme;
}
export interface FlowbiteFooterRootTheme {
    base: string;
    bgDark: string;
    container: string;
}
export interface FooterProps extends ComponentProps<"footer"> {
    bgDark?: boolean;
    container?: boolean;
    theme?: DeepPartial<FlowbiteFooterTheme>;
}
export declare const FooterComponent: FC<FooterProps>;
export declare const Footer: FC<FooterProps> & {
    Copyright: FC<import("./FooterCopyright").CopyrightProps>;
    Link: FC<import("./FooterLink").FooterLinkProps>;
    LinkGroup: FC<import("./FooterLinkGroup").FooterLinkGroupProps>;
    Brand: FC<import("./FooterBrand").FooterBrandProps & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").ClassAttributes<HTMLImageElement> & import("react").ImgHTMLAttributes<HTMLImageElement>>;
    Icon: FC<import("./FooterIcon").FooterIconProps & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").SVGProps<SVGSVGElement>>;
    Title: FC<import("./FooterTitle").FooterTitleProps>;
    Divider: FC<import("./FooterDivider").FooterDividerProps>;
};
