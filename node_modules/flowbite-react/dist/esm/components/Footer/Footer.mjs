import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { FooterBrand } from './FooterBrand.mjs';
import { FooterCopyright } from './FooterCopyright.mjs';
import { FooterDivider } from './FooterDivider.mjs';
import { FooterIcon } from './FooterIcon.mjs';
import { FooterLink } from './FooterLink.mjs';
import { FooterLinkGroup } from './FooterLinkGroup.mjs';
import { FooterTitle } from './FooterTitle.mjs';

const FooterComponent = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer, customTheme);
  return /* @__PURE__ */ jsx(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className),
      ...props,
      children
    }
  );
};
FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";
const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider
});

export { Footer, FooterComponent };
//# sourceMappingURL=Footer.mjs.map
