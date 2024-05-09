'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { useDropdownContext } from './DropdownContext.mjs';

const DropdownDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme = customTheme.divider ?? rootTheme.floating.divider;
  return /* @__PURE__ */ jsx("div", { className: twMerge(theme, className), ...props });
};

export { DropdownDivider };
//# sourceMappingURL=DropdownDivider.mjs.map
