'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Badge = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().badge, customTheme);
  const Content = () => /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: tailwindMerge.twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? "on" : "off"],
        className
      ),
      "data-testid": "flowbite-badge",
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": true, className: theme.icon.size[size], "data-testid": "flowbite-badge-icon" }),
        children && /* @__PURE__ */ jsxRuntime.jsx("span", { children })
      ]
    }
  );
  return href ? /* @__PURE__ */ jsxRuntime.jsx("a", { className: theme.root.href, href, children: /* @__PURE__ */ jsxRuntime.jsx(Content, {}) }) : /* @__PURE__ */ jsxRuntime.jsx(Content, {});
};
Badge.displayName = "Badge";

exports.Badge = Badge;
//# sourceMappingURL=Badge.cjs.map
