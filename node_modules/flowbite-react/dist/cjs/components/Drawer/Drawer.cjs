'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var DrawerContext = require('./DrawerContext.cjs');
var DrawerHeader = require('./DrawerHeader.cjs');
var DrawerItems = require('./DrawerItems.cjs');

const DrawerComponent = ({
  backdrop = true,
  children,
  className,
  edge = false,
  position = "left",
  onClose,
  open: isOpen = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = React.useId();
  const theme = mergeDeep.mergeDeep(index.getTheme().drawer, customTheme);
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose, isOpen]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DrawerContext.DrawerContext.Provider, { value: { theme, onClose, isOpen, id }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        "aria-modal": true,
        "aria-describedby": `drawer-dialog-${id}`,
        role: "dialog",
        tabIndex: -1,
        "data-testid": "flowbite-drawer",
        className: tailwindMerge.twMerge(
          theme.root.base,
          theme.root.position[position][isOpen ? "on" : "off"],
          edge && !isOpen && theme.root.edge,
          className
        ),
        ...props,
        children
      }
    ),
    isOpen && backdrop && /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: () => onClose(), className: theme.root.backdrop })
  ] });
};
DrawerComponent.displayName = "Drawer";
const Drawer = Object.assign(DrawerComponent, {
  Header: DrawerHeader.DrawerHeader,
  Items: DrawerItems.DrawerItems
});

exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.cjs.map
