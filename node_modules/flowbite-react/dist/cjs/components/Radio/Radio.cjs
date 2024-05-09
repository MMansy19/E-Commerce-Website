'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Radio = React.forwardRef(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().radio, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx("input", { ref, type: "radio", className: tailwindMerge.twMerge(theme.root.base, className), ...props });
  }
);
Radio.displayName = "Radio";

exports.Radio = Radio;
//# sourceMappingURL=Radio.cjs.map
