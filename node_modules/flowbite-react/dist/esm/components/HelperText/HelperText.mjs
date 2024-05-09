import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const HelperText = ({
  children,
  className,
  color = "default",
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().helperText, customTheme);
  return /* @__PURE__ */ jsx("p", { className: twMerge(theme.root.base, theme.root.colors[color], className), ...props, children: value ?? children ?? "" });
};
HelperText.displayName = "HelperText";

export { HelperText };
//# sourceMappingURL=HelperText.mjs.map
