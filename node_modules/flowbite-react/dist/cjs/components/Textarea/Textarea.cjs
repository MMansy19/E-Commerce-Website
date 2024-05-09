'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var HelperText = require('../HelperText/HelperText.cjs');

const Textarea = React.forwardRef(
  ({ className, color = "gray", helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().textarea, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "textarea",
        {
          ref,
          className: tailwindMerge.twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? "on" : "off"], className),
          ...props
        }
      ),
      helperText && /* @__PURE__ */ jsxRuntime.jsx(HelperText.HelperText, { color, children: helperText })
    ] });
  }
);
Textarea.displayName = "Textarea";

exports.Textarea = Textarea;
//# sourceMappingURL=Textarea.cjs.map
