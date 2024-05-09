'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var DropdownContext = require('./DropdownContext.cjs');

const DropdownDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = DropdownContext.useDropdownContext();
  const theme = customTheme.divider ?? rootTheme.floating.divider;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme, className), ...props });
};

exports.DropdownDivider = DropdownDivider;
//# sourceMappingURL=DropdownDivider.cjs.map
