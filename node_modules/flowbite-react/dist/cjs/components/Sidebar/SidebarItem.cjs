'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var Badge = require('../Badge/Badge.cjs');
var Tooltip = require('../Tooltip/Tooltip.cjs');
var SidebarContext = require('./SidebarContext.cjs');
var SidebarItemContext = require('./SidebarItemContext.cjs');

const ListItem = ({ id, theme, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("li", { ...props, children: isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx(
  Tooltip.Tooltip,
  {
    content: /* @__PURE__ */ jsxRuntime.jsx(Children, { id, theme, children: tooltipChildren }),
    placement: "right",
    children: wrapperChildren
  }
) : wrapperChildren });
const Children = ({ id, theme, children }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "data-testid": "flowbite-sidebar-item-content",
      id: `flowbite-sidebar-item-${id}`,
      className: tailwindMerge.twMerge(theme.content.base),
      children
    }
  );
};
const SidebarItem = React.forwardRef(
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
    const id = React.useId();
    const { theme: rootTheme, isCollapsed } = SidebarContext.useSidebarContext();
    const { isInsideCollapse } = SidebarItemContext.useSidebarItemContext();
    const theme = mergeDeep.mergeDeep(rootTheme.item, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(ListItem, { theme, className: theme.listItem, id, isCollapsed, tooltipChildren: children, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Component,
      {
        "aria-labelledby": `flowbite-sidebar-item-${id}`,
        ref,
        className: tailwindMerge.twMerge(
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
          className
        ),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: tailwindMerge.twMerge(theme.icon?.base, isActive && theme.icon?.active)
            }
          ),
          isCollapsed && !Icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.collapsed?.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }),
          !isCollapsed && /* @__PURE__ */ jsxRuntime.jsx(Children, { id, theme, children }),
          !isCollapsed && label && /* @__PURE__ */ jsxRuntime.jsx(Badge.Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme.label, children: label })
        ]
      }
    ) });
  }
);
SidebarItem.displayName = "Sidebar.Item";

exports.SidebarItem = SidebarItem;
//# sourceMappingURL=SidebarItem.cjs.map
