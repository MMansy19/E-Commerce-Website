'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var SidebarCollapse = require('./SidebarCollapse.cjs');
var SidebarContext = require('./SidebarContext.cjs');
var SidebarCTA = require('./SidebarCTA.cjs');
var SidebarItem = require('./SidebarItem.cjs');
var SidebarItemGroup = require('./SidebarItemGroup.cjs');
var SidebarItems = require('./SidebarItems.cjs');
var SidebarLogo = require('./SidebarLogo.cjs');

const SidebarComponent = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().sidebar, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(SidebarContext.SidebarContext.Provider, { value: { theme, isCollapsed }, children: /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      "aria-label": "Sidebar",
      hidden: isCollapsed && collapseBehavior === "hide",
      className: tailwindMerge.twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.root.inner, children })
    }
  ) });
};
SidebarComponent.displayName = "Sidebar";
const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse.SidebarCollapse,
  CTA: SidebarCTA.SidebarCTA,
  Item: SidebarItem.SidebarItem,
  Items: SidebarItems.SidebarItems,
  ItemGroup: SidebarItemGroup.SidebarItemGroup,
  Logo: SidebarLogo.SidebarLogo
});

exports.Sidebar = Sidebar;
//# sourceMappingURL=Sidebar.cjs.map
