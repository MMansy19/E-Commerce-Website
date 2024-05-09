'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var NavbarBrand = require('./NavbarBrand.cjs');
var NavbarCollapse = require('./NavbarCollapse.cjs');
var NavbarContext = require('./NavbarContext.cjs');
var NavbarLink = require('./NavbarLink.cjs');
var NavbarToggle = require('./NavbarToggle.cjs');

const NavbarComponent = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(menuOpen);
  const theme = mergeDeep.mergeDeep(index.getTheme().navbar, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(NavbarContext.NavbarContext.Provider, { value: { theme, isOpen, setIsOpen }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      className: tailwindMerge.twMerge(
        theme.root.base,
        theme.root.bordered[border ? "on" : "off"],
        theme.root.rounded[rounded ? "on" : "off"],
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.root.inner.base, theme.root.inner.fluid[fluid ? "on" : "off"]), children })
    }
  ) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.NavbarLink.displayName = "Navbar.Link";
NavbarToggle.NavbarToggle.displayName = "Navbar.Toggle";
const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand.NavbarBrand,
  Collapse: NavbarCollapse.NavbarCollapse,
  Link: NavbarLink.NavbarLink,
  Toggle: NavbarToggle.NavbarToggle
});

exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.cjs.map
