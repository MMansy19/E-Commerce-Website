'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var SidebarContext = require('./SidebarContext.cjs');

const SidebarCTA = ({
  children,
  color = "info",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = SidebarContext.useSidebarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.cta, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: isCollapsed,
      className: tailwindMerge.twMerge(theme.base, theme.color[color], className),
      ...props,
      children
    }
  );
};
SidebarCTA.displayName = "Sidebar.CTA";

exports.SidebarCTA = SidebarCTA;
//# sourceMappingURL=SidebarCTA.cjs.map
