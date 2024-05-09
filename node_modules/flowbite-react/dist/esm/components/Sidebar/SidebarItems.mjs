'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useSidebarContext } from './SidebarContext.mjs';

const SidebarItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme = mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsx("div", { className: twMerge(theme.base, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";

export { SidebarItems };
//# sourceMappingURL=SidebarItems.mjs.map
