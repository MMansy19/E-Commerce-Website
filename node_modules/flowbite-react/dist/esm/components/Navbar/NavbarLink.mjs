'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useNavbarContext } from './NavbarContext.mjs';

const NavbarLink = ({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  theme: customTheme = {},
  onClick,
  ...props
}) => {
  const { theme: rootTheme, setIsOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.link, customTheme);
  const handleClick = (event) => {
    setIsOpen(false);
    onClick?.(event);
  };
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: twMerge(
        theme.base,
        active && theme.active.on,
        !active && !disabled && theme.active.off,
        theme.disabled[disabled ? "on" : "off"],
        className
      ),
      onClick: handleClick,
      ...props,
      children
    }
  ) });
};

export { NavbarLink };
//# sourceMappingURL=NavbarLink.mjs.map
