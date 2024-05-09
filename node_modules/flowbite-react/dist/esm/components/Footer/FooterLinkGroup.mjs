import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterLinkGroup = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink, customTheme);
  return /* @__PURE__ */ jsx("ul", { "data-testid": "footer-groupLink", className: twMerge(theme.base, col && theme.col, className), ...props, children });
};

export { FooterLinkGroup };
//# sourceMappingURL=FooterLinkGroup.mjs.map
