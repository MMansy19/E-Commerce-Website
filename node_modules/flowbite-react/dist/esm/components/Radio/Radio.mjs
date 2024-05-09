import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Radio = forwardRef(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().radio, customTheme);
    return /* @__PURE__ */ jsx("input", { ref, type: "radio", className: twMerge(theme.root.base, className), ...props });
  }
);
Radio.displayName = "Radio";

export { Radio };
//# sourceMappingURL=Radio.mjs.map
