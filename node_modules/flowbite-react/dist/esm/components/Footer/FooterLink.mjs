import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterLink = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink.link, customTheme);
  return /* @__PURE__ */ jsx("li", { className: twMerge(theme.base, className), children: /* @__PURE__ */ jsx(Component, { href, className: theme.href, ...props, children }) });
};

export { FooterLink };
//# sourceMappingURL=FooterLink.mjs.map
