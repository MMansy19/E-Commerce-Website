'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { Navbar } from '../Navbar/Navbar.mjs';
import 'tailwind-merge';
import '../Navbar/NavbarContext.mjs';
import 'react-icons/fa';
import { MegaMenuDropdown } from './MegaMenuDropdown.mjs';
import { MegaMenuDropdownToggle } from './MegaMenuDropdownToggle.mjs';

const MegaMenuComponent = ({ children, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().megaMenu, customTheme);
  return /* @__PURE__ */ jsx(Navbar, { fluid: true, theme, ...props, children });
};
const MegaMenu = Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle
});
MegaMenuComponent.displayName = "MegaMenu";

export { MegaMenu };
//# sourceMappingURL=MegaMenu.mjs.map
