'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var ModalContext = require('./ModalContext.cjs');

const ModalFooter = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = ModalContext.useModalContext();
  const theme = mergeDeep.mergeDeep(rootTheme.footer, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.base, !popup && theme.popup, className), ...props, children });
};

exports.ModalFooter = ModalFooter;
//# sourceMappingURL=ModalFooter.cjs.map
