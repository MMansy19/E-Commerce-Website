'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const ListGroupItem = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().listGroup.item, customTheme);
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className: tailwindMerge.twMerge(theme.base, className), children: /* @__PURE__ */ jsxRuntime.jsxs(
    Component,
    {
      href,
      onClick,
      type: isLink ? void 0 : "button",
      disabled,
      className: tailwindMerge.twMerge(
        theme.link.active[isActive ? "on" : "off"],
        theme.link.disabled[disabled ? "on" : "off"],
        theme.link.base,
        theme.link.href[isLink ? "on" : "off"]
      ),
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: theme.link.icon }),
        children
      ]
    }
  ) });
};

exports.ListGroupItem = ListGroupItem;
//# sourceMappingURL=ListGroupItem.cjs.map
