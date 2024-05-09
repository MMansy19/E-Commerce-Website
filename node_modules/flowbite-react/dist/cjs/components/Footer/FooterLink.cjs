'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterLink = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.groupLink.link, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: tailwindMerge.twMerge(theme.base, className), children: /* @__PURE__ */ jsxRuntime.jsx(Component, { href, className: theme.href, ...props, children }) });
};

exports.FooterLink = FooterLink;
//# sourceMappingURL=FooterLink.cjs.map
