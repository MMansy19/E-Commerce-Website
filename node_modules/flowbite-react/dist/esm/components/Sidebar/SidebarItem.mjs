'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { Badge } from '../Badge/Badge.mjs';
import { Tooltip } from '../Tooltip/Tooltip.mjs';
import { useSidebarContext } from './SidebarContext.mjs';
import { useSidebarItemContext } from './SidebarItemContext.mjs';

const ListItem = ({ id, theme, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => /* @__PURE__ */ jsx("li", { ...props, children: isCollapsed ? /* @__PURE__ */ jsx(
  Tooltip,
  {
    content: /* @__PURE__ */ jsx(Children, { id, theme, children: tooltipChildren }),
    placement: "right",
    children: wrapperChildren
  }
) : wrapperChildren });
const Children = ({ id, theme, children }) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-testid": "flowbite-sidebar-item-content",
      id: `flowbite-sidebar-item-${id}`,
      className: twMerge(theme.content.base),
      children
    }
  );
};
const SidebarItem = forwardRef(
  ({
    active: isActive,
    as: Component = "a",
    children,
    className,
    icon: Icon,
    label,
    labelColor = "info",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const id = useId();
    const { theme: rootTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme = mergeDeep(rootTheme.item, customTheme);
    return /* @__PURE__ */ jsx(ListItem, { theme, className: theme.listItem, id, isCollapsed, tooltipChildren: children, children: /* @__PURE__ */ jsxs(
      Component,
      {
        "aria-labelledby": `flowbite-sidebar-item-${id}`,
        ref,
        className: twMerge(
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
          className
        ),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: twMerge(theme.icon?.base, isActive && theme.icon?.active)
            }
          ),
          isCollapsed && !Icon && /* @__PURE__ */ jsx("span", { className: theme.collapsed?.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }),
          !isCollapsed && /* @__PURE__ */ jsx(Children, { id, theme, children }),
          !isCollapsed && label && /* @__PURE__ */ jsx(Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme.label, children: label })
        ]
      }
    ) });
  }
);
SidebarItem.displayName = "Sidebar.Item";

export { SidebarItem };
//# sourceMappingURL=SidebarItem.mjs.map
