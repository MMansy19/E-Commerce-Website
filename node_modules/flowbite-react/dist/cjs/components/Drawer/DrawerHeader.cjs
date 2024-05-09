'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var md = require('react-icons/md');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var DrawerContext = require('./DrawerContext.cjs');

const DrawerHeader = ({
  children,
  className,
  closeIcon: CloseIcon = md.MdClose,
  theme: customTheme = {},
  title,
  titleIcon: TitleIcon = md.MdHome,
  ...props
}) => {
  const id = React.useId();
  const { id: mainDivId, isOpen, onClose, theme: rootTheme } = DrawerContext.useDrawerContext();
  const theme = mergeDeep.mergeDeep(rootTheme.header, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("h5", { className: theme.inner.titleText, id: mainDivId, children: [
      /* @__PURE__ */ jsxRuntime.jsx(TitleIcon, { "aria-hidden": true, className: theme.inner.titleIcon }),
      title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("button", { onClick: onClose, "data-testid": "close-drawer", className: theme.inner.closeButton, children: [
      /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, { "aria-hidden": true, className: theme.inner.closeIcon }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close menu" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.collapsed[isOpen ? "on" : "off"], id: `flowbite-drawer-header-${id}`, children })
  ] });
};
DrawerHeader.displayName = "Drawer.Header";

exports.DrawerHeader = DrawerHeader;
//# sourceMappingURL=DrawerHeader.cjs.map
