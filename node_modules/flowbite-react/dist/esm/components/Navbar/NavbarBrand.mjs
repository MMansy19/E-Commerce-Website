'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useNavbarContext } from './NavbarContext.mjs';

const NavbarBrand = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();
  const theme = mergeDeep(rootTheme.brand, customTheme);
  return /* @__PURE__ */ jsx(Component, { className: twMerge(theme.base, className), ...props, children });
};

export { NavbarBrand };
//# sourceMappingURL=NavbarBrand.mjs.map
