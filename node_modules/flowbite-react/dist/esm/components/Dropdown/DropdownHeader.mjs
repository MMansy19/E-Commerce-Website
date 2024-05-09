'use client';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { useDropdownContext } from './DropdownContext.mjs';
import { DropdownDivider } from './DropdownDivider.mjs';

const DropdownHeader = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme = customTheme.header ?? rootTheme.floating.header;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: twMerge(theme, className), ...props, children }),
    /* @__PURE__ */ jsx(DropdownDivider, {})
  ] });
};

export { DropdownHeader };
//# sourceMappingURL=DropdownHeader.mjs.map
