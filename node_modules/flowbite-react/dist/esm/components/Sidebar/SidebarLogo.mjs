'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useSidebarContext } from './SidebarContext.mjs';

const SidebarLogo = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.logo, customTheme);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${id}`,
      href,
      className: twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("img", { alt: imgAlt, src: img, className: theme.img }),
        /* @__PURE__ */ jsx("span", { className: theme.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })
      ]
    }
  );
};
SidebarLogo.displayName = "Sidebar.Logo";

export { SidebarLogo };
//# sourceMappingURL=SidebarLogo.mjs.map
