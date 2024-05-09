'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var SidebarContext = require('./SidebarContext.cjs');

const SidebarLogo = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme = {},
  ...props
}) => {
  const id = React.useId();
  const { theme: rootTheme, isCollapsed } = SidebarContext.useSidebarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.logo, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${id}`,
      href,
      className: tailwindMerge.twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("img", { alt: imgAlt, src: img, className: theme.img }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })
      ]
    }
  );
};
SidebarLogo.displayName = "Sidebar.Logo";

exports.SidebarLogo = SidebarLogo;
//# sourceMappingURL=SidebarLogo.cjs.map
