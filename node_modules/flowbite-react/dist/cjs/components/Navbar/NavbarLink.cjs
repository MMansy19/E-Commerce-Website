'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var NavbarContext = require('./NavbarContext.cjs');

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
  const { theme: rootTheme, setIsOpen } = NavbarContext.useNavbarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.link, customTheme);
  const handleClick = (event) => {
    setIsOpen(false);
    onClick?.(event);
  };
  return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      className: tailwindMerge.twMerge(
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

exports.NavbarLink = NavbarLink;
//# sourceMappingURL=NavbarLink.cjs.map
