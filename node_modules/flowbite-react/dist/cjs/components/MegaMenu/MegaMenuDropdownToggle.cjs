'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const MegaMenuDropdownToggle = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = React.useId();
  const ref = React.useRef(null);
  const [controls, setControls] = React.useState(void 0);
  const [isExpanded, setExpanded] = React.useState(void 0);
  const theme = mergeDeep.mergeDeep(index.getTheme().megaMenu.dropdownToggle, customTheme);
  const findDropdown = function() {
    const megaMenu = ref.current?.closest("nav");
    return megaMenu?.querySelector('[role="menu"]');
  };
  const onClick = function() {
    findDropdown()?.classList.toggle("hidden");
    setExpanded(!isExpanded);
  };
  React.useEffect(() => {
    const dropdown = findDropdown();
    const isDropdownHidden = dropdown?.classList.contains("hidden");
    setControls(dropdown?.id);
    setExpanded(!isDropdownHidden);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      "aria-controls": controls,
      "aria-expanded": isExpanded,
      "aria-haspopup": "menu",
      id,
      onClick,
      ref,
      className: tailwindMerge.twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdownToggle.displayName = "MegaMenu.DropdownToggle";

exports.MegaMenuDropdownToggle = MegaMenuDropdownToggle;
//# sourceMappingURL=MegaMenuDropdownToggle.cjs.map
