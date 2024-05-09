import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Checkbox = forwardRef(
  ({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme);
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        type: "checkbox",
        className: twMerge(theme.root.base, theme.root.color[color], className),
        ...props
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
//# sourceMappingURL=Checkbox.mjs.map
