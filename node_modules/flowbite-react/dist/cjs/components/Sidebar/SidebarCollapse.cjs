'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var Tooltip = require('../Tooltip/Tooltip.cjs');
var SidebarContext = require('./SidebarContext.cjs');
var SidebarItemContext = require('./SidebarItemContext.cjs');

const SidebarCollapse = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = hi.HiChevronDown,
  renderChevronIcon,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = React.useId();
  const [isOpen, setOpen] = React.useState(open);
  const { theme: rootTheme, isCollapsed } = SidebarContext.useSidebarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.collapse, customTheme);
  React.useEffect(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: isCollapsed && !isOpen ? /* @__PURE__ */ jsxRuntime.jsx(Tooltip.Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return /* @__PURE__ */ jsxRuntime.jsxs(Wrapper, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        id: `flowbite-sidebar-collapse-${id}`,
        onClick: () => setOpen(!isOpen),
        title: label,
        type: "button",
        className: tailwindMerge.twMerge(theme.button, className),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: tailwindMerge.twMerge(theme.icon.base, theme.icon.open[isOpen ? "on" : "off"])
            }
          ),
          isCollapsed ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: label }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-sidebar-collapse-label", className: theme.label.base, children: label }),
            renderChevronIcon ? renderChevronIcon(theme, isOpen) : /* @__PURE__ */ jsxRuntime.jsx(
              ChevronIcon,
              {
                "aria-hidden": true,
                className: tailwindMerge.twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, hidden: !isOpen, className: theme.list, children: /* @__PURE__ */ jsxRuntime.jsx(SidebarItemContext.SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })
  ] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";

exports.SidebarCollapse = SidebarCollapse;
//# sourceMappingURL=SidebarCollapse.cjs.map
