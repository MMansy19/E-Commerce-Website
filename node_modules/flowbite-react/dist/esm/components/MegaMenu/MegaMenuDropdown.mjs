'use client';
import { jsx } from 'react/jsx-runtime';
import { useState, useId, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { Dropdown } from '../Dropdown/Dropdown.mjs';
import '../Dropdown/DropdownContext.mjs';
import '../Dropdown/DropdownItem.mjs';

const MegaMenuDropdown = ({
  children,
  className,
  theme: customTheme = {},
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = useState(void 0);
  const theme = mergeDeep(getTheme().megaMenu.dropdown, customTheme);
  if (toggle) {
    return /* @__PURE__ */ jsx(
      Dropdown,
      {
        inline: true,
        label: toggle,
        placement: "bottom",
        theme: theme.toggle,
        className: twMerge(theme.base, className),
        children
      }
    );
  }
  const id = useId();
  const ref = useRef(null);
  useEffect(() => {
    const findToggle = function() {
      const megaMenu = ref.current?.closest("nav");
      return megaMenu?.querySelector('[aria-haspopup="menu"]');
    };
    setLabelledBy(findToggle()?.id);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-labelledby": labelledBy,
      id,
      ref,
      role: "menu",
      className: twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdown.displayName = "MegaMenu.Dropdown";

export { MegaMenuDropdown };
//# sourceMappingURL=MegaMenuDropdown.mjs.map
