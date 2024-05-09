import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterTitle = ({
  as: Component = "h2",
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.title, customTheme);
  return /* @__PURE__ */ jsx(Component, { "data-testid": "flowbite-footer-title", className: twMerge(theme.base, className), ...props, children: title });
};

export { FooterTitle };
//# sourceMappingURL=FooterTitle.mjs.map
