'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterCopyright = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.copyright, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-testid": "flowbite-footer-copyright", className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
    "\xA9 ",
    year,
    href ? /* @__PURE__ */ jsxRuntime.jsx("a", { href, className: theme.href, children: by }) : /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: theme.span, children: by })
  ] });
};

exports.FooterCopyright = FooterCopyright;
//# sourceMappingURL=FooterCopyright.cjs.map
