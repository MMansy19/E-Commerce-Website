'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useDrawerContext } from './DrawerContext.mjs';

const DrawerItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDrawerContext();
  const theme = mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsx("div", { "data-testid": "flowbite-drawer-items", className: twMerge(theme.base, className), ...props, children });
};
DrawerItems.displayName = "Drawer.Items";

export { DrawerItems };
//# sourceMappingURL=DrawerItems.mjs.map
