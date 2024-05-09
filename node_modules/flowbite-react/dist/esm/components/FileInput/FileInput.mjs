import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { HelperText } from '../HelperText/HelperText.mjs';

const FileInput = forwardRef(
  ({ className, color = "gray", helperText, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: twMerge(theme.root.base, className), children: /* @__PURE__ */ jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsx(
        "input",
        {
          className: twMerge(
            theme.field.input.base,
            theme.field.input.colors[color],
            theme.field.input.sizes[sizing]
          ),
          ...props,
          type: "file",
          ref
        }
      ) }) }),
      helperText && /* @__PURE__ */ jsx(HelperText, { color, children: helperText })
    ] });
  }
);
FileInput.displayName = "FileInput";

export { FileInput };
//# sourceMappingURL=FileInput.mjs.map
