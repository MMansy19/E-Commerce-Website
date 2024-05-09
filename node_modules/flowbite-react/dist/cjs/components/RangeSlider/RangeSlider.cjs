'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const RangeSlider = React.forwardRef(
  ({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().rangeSlider, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "flowbite-range-slider", className: tailwindMerge.twMerge(theme.root.base, className), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ref,
        type: "range",
        className: tailwindMerge.twMerge(theme.field.input.base, theme.field.input.sizes[sizing]),
        ...props
      }
    ) }) }) });
  }
);
RangeSlider.displayName = "RangeSlider";

exports.RangeSlider = RangeSlider;
//# sourceMappingURL=RangeSlider.cjs.map
