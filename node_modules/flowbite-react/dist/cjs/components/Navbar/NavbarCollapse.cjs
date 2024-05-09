'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var NavbarContext = require('./NavbarContext.cjs');

const NavbarCollapse = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = NavbarContext.useNavbarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.collapse, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: tailwindMerge.twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("ul", { className: theme.list, children })
    }
  );
};

exports.NavbarCollapse = NavbarCollapse;
//# sourceMappingURL=NavbarCollapse.cjs.map
