'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var Navbar = require('../Navbar/Navbar.cjs');
require('tailwind-merge');
require('../Navbar/NavbarContext.cjs');
require('react-icons/fa');
var MegaMenuDropdown = require('./MegaMenuDropdown.cjs');
var MegaMenuDropdownToggle = require('./MegaMenuDropdownToggle.cjs');

const MegaMenuComponent = ({ children, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().megaMenu, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(Navbar.Navbar, { fluid: true, theme, ...props, children });
};
const MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown.MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle.MegaMenuDropdownToggle
});
MegaMenuComponent.displayName = "MegaMenu";

exports.MegaMenu = MegaMenu;
//# sourceMappingURL=MegaMenu.cjs.map
