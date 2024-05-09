'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { SidebarCollapse } from './SidebarCollapse.mjs';
import { SidebarContext } from './SidebarContext.mjs';
import { SidebarCTA } from './SidebarCTA.mjs';
import { SidebarItem } from './SidebarItem.mjs';
import { SidebarItemGroup } from './SidebarItemGroup.mjs';
import { SidebarItems } from './SidebarItems.mjs';
import { SidebarLogo } from './SidebarLogo.mjs';

const SidebarComponent = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().sidebar, customTheme);
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: { theme, isCollapsed }, children: /* @__PURE__ */ jsx(
    Component,
    {
      "aria-label": "Sidebar",
      hidden: isCollapsed && collapseBehavior === "hide",
      className: twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: theme.root.inner, children })
    }
  ) });
};
SidebarComponent.displayName = "Sidebar";
const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo
});

export { Sidebar };
//# sourceMappingURL=Sidebar.mjs.map
