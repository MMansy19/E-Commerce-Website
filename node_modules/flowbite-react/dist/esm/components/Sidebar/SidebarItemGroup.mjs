'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useSidebarContext } from './SidebarContext.mjs';
import { SidebarItemContext } from './SidebarItemContext.mjs';

const SidebarItemGroup = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme = mergeDeep(rootTheme.itemGroup, customTheme);
  return /* @__PURE__ */ jsx("ul", { "data-testid": "flowbite-sidebar-item-group", className: twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsx(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";

export { SidebarItemGroup };
//# sourceMappingURL=SidebarItemGroup.mjs.map
