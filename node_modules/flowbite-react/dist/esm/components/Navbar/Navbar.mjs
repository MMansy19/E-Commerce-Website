'use client';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { NavbarBrand } from './NavbarBrand.mjs';
import { NavbarCollapse } from './NavbarCollapse.mjs';
import { NavbarContext } from './NavbarContext.mjs';
import { NavbarLink } from './NavbarLink.mjs';
import { NavbarToggle } from './NavbarToggle.mjs';

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
  const [isOpen, setIsOpen] = useState(menuOpen);
  const theme = mergeDeep(getTheme().navbar, customTheme);
  return /* @__PURE__ */ jsx(NavbarContext.Provider, { value: { theme, isOpen, setIsOpen }, children: /* @__PURE__ */ jsx(
    "nav",
    {
      className: twMerge(
        theme.root.base,
        theme.root.bordered[border ? "on" : "off"],
        theme.root.rounded[rounded ? "on" : "off"],
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: twMerge(theme.root.inner.base, theme.root.inner.fluid[fluid ? "on" : "off"]), children })
    }
  ) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle
});

export { Navbar };
//# sourceMappingURL=Navbar.mjs.map
