'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var ModalContext = require('./ModalContext.cjs');

const ModalBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = ModalContext.useModalContext();
  const theme = mergeDeep.mergeDeep(rootTheme.body, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.base, popup && [theme.popup], className), ...props, children });
};

exports.ModalBody = ModalBody;
//# sourceMappingURL=ModalBody.cjs.map
