import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Label = ({
  children,
  className,
  color = "default",
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().label, customTheme);
  return /* @__PURE__ */ jsx(
    "label",
    {
      className: twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className),
      "data-testid": "flowbite-label",
      ...props,
      children: value ?? children ?? ""
    }
  );
};
Label.displayName = "Label";

export { Label };
//# sourceMappingURL=Label.mjs.map
