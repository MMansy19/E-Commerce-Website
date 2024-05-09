'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var SidebarContext = require('./SidebarContext.cjs');

const SidebarItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = SidebarContext.useSidebarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.base, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";

exports.SidebarItems = SidebarItems;
//# sourceMappingURL=SidebarItems.cjs.map
