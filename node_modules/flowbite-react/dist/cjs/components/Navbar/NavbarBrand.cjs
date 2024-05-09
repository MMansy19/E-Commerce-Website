'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var NavbarContext = require('./NavbarContext.cjs');

const NavbarBrand = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = NavbarContext.useNavbarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.brand, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(Component, { className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};

exports.NavbarBrand = NavbarBrand;
//# sourceMappingURL=NavbarBrand.cjs.map
