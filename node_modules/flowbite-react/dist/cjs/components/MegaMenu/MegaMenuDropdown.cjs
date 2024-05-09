'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var Dropdown = require('../Dropdown/Dropdown.cjs');
require('../Dropdown/DropdownContext.cjs');
require('../Dropdown/DropdownItem.cjs');

const MegaMenuDropdown = ({
  children,
  className,
  theme: customTheme = {},
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = React.useState(void 0);
  const theme = mergeDeep.mergeDeep(index.getTheme().megaMenu.dropdown, customTheme);
  if (toggle) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Dropdown.Dropdown,
      {
        inline: true,
        label: toggle,
        placement: "bottom",
        theme: theme.toggle,
        className: tailwindMerge.twMerge(theme.base, className),
        children
      }
    );
  }
  const id = React.useId();
  const ref = React.useRef(null);
  React.useEffect(() => {
    const findToggle = function() {
      const megaMenu = ref.current?.closest("nav");
      return megaMenu?.querySelector('[aria-haspopup="menu"]');
    };
    setLabelledBy(findToggle()?.id);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "aria-labelledby": labelledBy,
      id,
      ref,
      role: "menu",
      className: tailwindMerge.twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdown.displayName = "MegaMenu.Dropdown";

exports.MegaMenuDropdown = MegaMenuDropdown;
//# sourceMappingURL=MegaMenuDropdown.cjs.map
