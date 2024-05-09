'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId } from 'react';
import { MdClose, MdHome } from 'react-icons/md';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useDrawerContext } from './DrawerContext.mjs';

const DrawerHeader = ({
  children,
  className,
  closeIcon: CloseIcon = MdClose,
  theme: customTheme = {},
  title,
  titleIcon: TitleIcon = MdHome,
  ...props
}) => {
  const id = useId();
  const { id: mainDivId, isOpen, onClose, theme: rootTheme } = useDrawerContext();
  const theme = mergeDeep(rootTheme.header, customTheme);
  return /* @__PURE__ */ jsxs("div", { className, ...props, children: [
    /* @__PURE__ */ jsxs("h5", { className: theme.inner.titleText, id: mainDivId, children: [
      /* @__PURE__ */ jsx(TitleIcon, { "aria-hidden": true, className: theme.inner.titleIcon }),
      title
    ] }),
    /* @__PURE__ */ jsxs("button", { onClick: onClose, "data-testid": "close-drawer", className: theme.inner.closeButton, children: [
      /* @__PURE__ */ jsx(CloseIcon, { "aria-hidden": true, className: theme.inner.closeIcon }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: theme.collapsed[isOpen ? "on" : "off"], id: `flowbite-drawer-header-${id}`, children })
  ] });
};
DrawerHeader.displayName = "Drawer.Header";

export { DrawerHeader };
//# sourceMappingURL=DrawerHeader.mjs.map
