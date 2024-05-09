'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var DropdownContext = require('./DropdownContext.cjs');
var DropdownDivider = require('./DropdownDivider.cjs');

const DropdownHeader = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = DropdownContext.useDropdownContext();
  const theme = customTheme.header ?? rootTheme.floating.header;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme, className), ...props, children }),
    /* @__PURE__ */ jsxRuntime.jsx(DropdownDivider.DropdownDivider, {})
  ] });
};

exports.DropdownHeader = DropdownHeader;
//# sourceMappingURL=DropdownHeader.cjs.map
