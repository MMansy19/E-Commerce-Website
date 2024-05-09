'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useSidebarContext } from './SidebarContext.mjs';

const SidebarCTA = ({
  children,
  color = "info",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.cta, customTheme);
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: isCollapsed,
      className: twMerge(theme.base, theme.color[color], className),
      ...props,
      children
    }
  );
};
SidebarCTA.displayName = "Sidebar.CTA";

export { SidebarCTA };
//# sourceMappingURL=SidebarCTA.mjs.map
