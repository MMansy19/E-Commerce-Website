'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Checkbox = React.forwardRef(
  ({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().checkbox, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ref,
        type: "checkbox",
        className: tailwindMerge.twMerge(theme.root.base, theme.root.color[color], className),
        ...props
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.cjs.map
