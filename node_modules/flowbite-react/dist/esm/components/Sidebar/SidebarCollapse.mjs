'use client';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useId, useState, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { Tooltip } from '../Tooltip/Tooltip.mjs';
import { useSidebarContext } from './SidebarContext.mjs';
import { SidebarItemContext } from './SidebarItemContext.mjs';

const SidebarCollapse = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = HiChevronDown,
  renderChevronIcon,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const [isOpen, setOpen] = useState(open);
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.collapse, customTheme);
  useEffect(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => /* @__PURE__ */ jsx("li", { children: isCollapsed && !isOpen ? /* @__PURE__ */ jsx(Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return /* @__PURE__ */ jsxs(Wrapper, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        id: `flowbite-sidebar-collapse-${id}`,
        onClick: () => setOpen(!isOpen),
        title: label,
        type: "button",
        className: twMerge(theme.button, className),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: twMerge(theme.icon.base, theme.icon.open[isOpen ? "on" : "off"])
            }
          ),
          isCollapsed ? /* @__PURE__ */ jsx("span", { className: "sr-only", children: label }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-sidebar-collapse-label", className: theme.label.base, children: label }),
            renderChevronIcon ? renderChevronIcon(theme, isOpen) : /* @__PURE__ */ jsx(
              ChevronIcon,
              {
                "aria-hidden": true,
                className: twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, hidden: !isOpen, className: theme.list, children: /* @__PURE__ */ jsx(SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })
  ] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";

export { SidebarCollapse };
//# sourceMappingURL=SidebarCollapse.mjs.map
