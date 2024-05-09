'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterTitle = ({
  as: Component = "h2",
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.title, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { "data-testid": "flowbite-footer-title", className: tailwindMerge.twMerge(theme.base, className), ...props, children: title });
};

exports.FooterTitle = FooterTitle;
//# sourceMappingURL=FooterTitle.cjs.map
