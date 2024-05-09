'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var fa = require('react-icons/fa');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var NavbarContext = require('./NavbarContext.cjs');

const NavbarToggle = ({
  barIcon: BarIcon = fa.FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isOpen, setIsOpen } = NavbarContext.useNavbarContext();
  const theme = mergeDeep.mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: handleClick,
      className: tailwindMerge.twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsxRuntime.jsx(BarIcon, { "aria-hidden": true, className: theme.icon })
      ]
    }
  );
};

exports.NavbarToggle = NavbarToggle;
//# sourceMappingURL=NavbarToggle.cjs.map
