'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var BreadcrumbItem = require('./BreadcrumbItem.cjs');

const BreadcrumbComponent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().breadcrumb.root, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "Breadcrumb", className: tailwindMerge.twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: theme.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem.BreadcrumbItem
});

exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=Breadcrumb.cjs.map
