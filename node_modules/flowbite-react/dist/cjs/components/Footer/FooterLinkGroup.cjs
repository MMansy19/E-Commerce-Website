'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterLinkGroup = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.groupLink, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { "data-testid": "footer-groupLink", className: tailwindMerge.twMerge(theme.base, col && theme.col, className), ...props, children });
};

exports.FooterLinkGroup = FooterLinkGroup;
//# sourceMappingURL=FooterLinkGroup.cjs.map
