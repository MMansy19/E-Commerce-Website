'use client';
import { jsx } from 'react/jsx-runtime';
import { useId, useRef, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const MegaMenuDropdownToggle = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const ref = useRef(null);
  const [controls, setControls] = useState(void 0);
  const [isExpanded, setExpanded] = useState(void 0);
  const theme = mergeDeep(getTheme().megaMenu.dropdownToggle, customTheme);
  const findDropdown = function() {
    const megaMenu = ref.current?.closest("nav");
    return megaMenu?.querySelector('[role="menu"]');
  };
  const onClick = function() {
    findDropdown()?.classList.toggle("hidden");
    setExpanded(!isExpanded);
  };
  useEffect(() => {
    const dropdown = findDropdown();
    const isDropdownHidden = dropdown?.classList.contains("hidden");
    setControls(dropdown?.id);
    setExpanded(!isDropdownHidden);
  }, []);
  return /* @__PURE__ */ jsx(
    "button",
    {
      "aria-controls": controls,
      "aria-expanded": isExpanded,
      "aria-haspopup": "menu",
      id,
      onClick,
      ref,
      className: twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdownToggle.displayName = "MegaMenu.DropdownToggle";

export { MegaMenuDropdownToggle };
//# sourceMappingURL=MegaMenuDropdownToggle.mjs.map
