'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var DrawerContext = require('./DrawerContext.cjs');

const DrawerItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = DrawerContext.useDrawerContext();
  const theme = mergeDeep.mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "flowbite-drawer-items", className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};
DrawerItems.displayName = "Drawer.Items";

exports.DrawerItems = DrawerItems;
//# sourceMappingURL=DrawerItems.cjs.map
