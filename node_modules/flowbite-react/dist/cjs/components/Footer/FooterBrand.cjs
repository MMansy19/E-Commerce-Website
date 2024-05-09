'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterBrand = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.brand, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { children: href ? /* @__PURE__ */ jsxRuntime.jsxs("a", { "data-testid": "flowbite-footer-brand", href, className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("img", { alt, src, className: theme.img }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-footer-brand-span", className: theme.span, children: name }),
    children
  ] }) : /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      alt,
      "data-testid": "flowbite-footer-brand",
      src,
      className: tailwindMerge.twMerge(theme.img, className),
      ...props
    }
  ) });
};

exports.FooterBrand = FooterBrand;
//# sourceMappingURL=FooterBrand.cjs.map
