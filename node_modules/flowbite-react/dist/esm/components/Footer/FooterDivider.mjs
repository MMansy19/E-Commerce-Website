import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().footer.divider, customTheme);
  return /* @__PURE__ */ jsx("hr", { "data-testid": "footer-divider", className: twMerge(theme.base, className), ...props });
};

export { FooterDivider };
//# sourceMappingURL=FooterDivider.mjs.map
