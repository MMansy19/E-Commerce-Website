'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterIcon = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.icon, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { children: href ? /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      "aria-label": ariaLabel,
      "data-testid": "flowbite-footer-icon",
      href,
      className: tailwindMerge.twMerge(theme.base, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.size })
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(Icon, { "data-testid": "flowbite-footer-icon", className: theme.size, ...props }) });
};

exports.FooterIcon = FooterIcon;
//# sourceMappingURL=FooterIcon.cjs.map
