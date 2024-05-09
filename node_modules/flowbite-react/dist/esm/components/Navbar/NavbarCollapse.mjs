'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useNavbarContext } from './NavbarContext.mjs';

const NavbarCollapse = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.collapse, customTheme);
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsx("ul", { className: theme.list, children })
    }
  );
};

export { NavbarCollapse };
//# sourceMappingURL=NavbarCollapse.mjs.map
