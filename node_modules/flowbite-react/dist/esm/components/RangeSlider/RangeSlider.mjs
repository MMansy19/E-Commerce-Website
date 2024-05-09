import { jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const RangeSlider = forwardRef(
  ({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().rangeSlider, customTheme);
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { "data-testid": "flowbite-range-slider", className: twMerge(theme.root.base, className), children: /* @__PURE__ */ jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        type: "range",
        className: twMerge(theme.field.input.base, theme.field.input.sizes[sizing]),
        ...props
      }
    ) }) }) });
  }
);
RangeSlider.displayName = "RangeSlider";

export { RangeSlider };
//# sourceMappingURL=RangeSlider.mjs.map
