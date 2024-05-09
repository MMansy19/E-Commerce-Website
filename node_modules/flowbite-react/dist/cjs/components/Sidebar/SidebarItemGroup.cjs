'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var SidebarContext = require('./SidebarContext.cjs');
var SidebarItemContext = require('./SidebarItemContext.cjs');

const SidebarItemGroup = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = SidebarContext.useSidebarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.itemGroup, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { "data-testid": "flowbite-sidebar-item-group", className: tailwindMerge.twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsxRuntime.jsx(SidebarItemContext.SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";

exports.SidebarItemGroup = SidebarItemGroup;
//# sourceMappingURL=SidebarItemGroup.cjs.map
