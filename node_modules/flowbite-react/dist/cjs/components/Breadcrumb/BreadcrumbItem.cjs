'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const BreadcrumbItem = React.forwardRef(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";
    const theme = mergeDeep.mergeDeep(index.getTheme().breadcrumb.item, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsx(hi.HiOutlineChevronRight, { "aria-hidden": true, className: theme.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        Component,
        {
          ref,
          className: theme.href[isLink ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href,
          children: [
            Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": true, className: theme.icon }),
            children
          ]
        }
      )
    ] });
  }
);
BreadcrumbItem.displayName = "Breadcrumb.Item";

exports.BreadcrumbItem = BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.cjs.map
