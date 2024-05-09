'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FaBars } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useNavbarContext } from './NavbarContext.mjs';

const NavbarToggle = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: handleClick,
      className: twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsx(BarIcon, { "aria-hidden": true, className: theme.icon })
      ]
    }
  );
};

export { NavbarToggle };
//# sourceMappingURL=NavbarToggle.mjs.map
