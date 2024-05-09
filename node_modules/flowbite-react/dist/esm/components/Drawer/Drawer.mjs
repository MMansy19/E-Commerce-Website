'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { DrawerContext } from './DrawerContext.mjs';
import { DrawerHeader } from './DrawerHeader.mjs';
import { DrawerItems } from './DrawerItems.mjs';

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
  const id = useId();
  const theme = mergeDeep(getTheme().drawer, customTheme);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose, isOpen]);
  return /* @__PURE__ */ jsxs(DrawerContext.Provider, { value: { theme, onClose, isOpen, id }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-modal": true,
        "aria-describedby": `drawer-dialog-${id}`,
        role: "dialog",
        tabIndex: -1,
        "data-testid": "flowbite-drawer",
        className: twMerge(
          theme.root.base,
          theme.root.position[position][isOpen ? "on" : "off"],
          edge && !isOpen && theme.root.edge,
          className
        ),
        ...props,
        children
      }
    ),
    isOpen && backdrop && /* @__PURE__ */ jsx("div", { onClick: () => onClose(), className: theme.root.backdrop })
  ] });
};
DrawerComponent.displayName = "Drawer";
const Drawer = Object.assign(DrawerComponent, {
  Header: DrawerHeader,
  Items: DrawerItems
});

export { Drawer };
//# sourceMappingURL=Drawer.mjs.map
