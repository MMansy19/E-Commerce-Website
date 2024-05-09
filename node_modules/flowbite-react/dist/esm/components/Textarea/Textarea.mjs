import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { HelperText } from '../HelperText/HelperText.mjs';

const Textarea = forwardRef(
  ({ className, color = "gray", helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          className: twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? "on" : "off"], className),
          ...props
        }
      ),
      helperText && /* @__PURE__ */ jsx(HelperText, { color, children: helperText })
    ] });
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
//# sourceMappingURL=Textarea.mjs.map
