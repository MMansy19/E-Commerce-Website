'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var FooterBrand = require('./FooterBrand.cjs');
var FooterCopyright = require('./FooterCopyright.cjs');
var FooterDivider = require('./FooterDivider.cjs');
var FooterIcon = require('./FooterIcon.cjs');
var FooterLink = require('./FooterLink.cjs');
var FooterLinkGroup = require('./FooterLinkGroup.cjs');
var FooterTitle = require('./FooterTitle.cjs');

const FooterComponent = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: tailwindMerge.twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className),
      ...props,
      children
    }
  );
};
FooterComponent.displayName = "Footer";
FooterCopyright.FooterCopyright.displayName = "Footer.Copyright";
FooterLink.FooterLink.displayName = "Footer.Link";
FooterBrand.FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.FooterIcon.displayName = "Footer.Icon";
FooterTitle.FooterTitle.displayName = "Footer.Title";
FooterDivider.FooterDivider.displayName = "Footer.Divider";
const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright.FooterCopyright,
  Link: FooterLink.FooterLink,
  LinkGroup: FooterLinkGroup.FooterLinkGroup,
  Brand: FooterBrand.FooterBrand,
  Icon: FooterIcon.FooterIcon,
  Title: FooterTitle.FooterTitle,
  Divider: FooterDivider.FooterDivider
});

exports.Footer = Footer;
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=Footer.cjs.map
