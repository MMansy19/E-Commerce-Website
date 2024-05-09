'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var ModalContext = require('./ModalContext.cjs');

const ModalHeader = ({
  as: Component = "h3",
  children,
  className,
  theme: customTheme = {},
  id,
  ...props
}) => {
  const innerHeaderId = React.useId();
  const headerId = id || innerHeaderId;
  const { theme: rootTheme, popup, onClose, setHeaderId } = ModalContext.useModalContext();
  const theme = mergeDeep.mergeDeep(rootTheme.header, customTheme);
  React.useLayoutEffect(() => {
    setHeaderId(headerId);
    return () => setHeaderId(void 0);
  }, [headerId, setHeaderId]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge(theme.base, popup && theme.popup, className), ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Component, { id: headerId, className: theme.title, children }),
    /* @__PURE__ */ jsxRuntime.jsx("button", { "aria-label": "Close", className: theme.close.base, type: "button", onClick: onClose, children: /* @__PURE__ */ jsxRuntime.jsx(hi.HiOutlineX, { "aria-hidden": true, className: theme.close.icon }) })
  ] });
};

exports.ModalHeader = ModalHeader;
//# sourceMappingURL=ModalHeader.cjs.map
