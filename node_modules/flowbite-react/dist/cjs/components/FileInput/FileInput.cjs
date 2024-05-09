'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var HelperText = require('../HelperText/HelperText.cjs');

const FileInput = React.forwardRef(
  ({ className, color = "gray", helperText, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().fileInput, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.root.base, className), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          className: tailwindMerge.twMerge(
            theme.field.input.base,
            theme.field.input.colors[color],
            theme.field.input.sizes[sizing]
          ),
          ...props,
          type: "file",
          ref
        }
      ) }) }),
      helperText && /* @__PURE__ */ jsxRuntime.jsx(HelperText.HelperText, { color, children: helperText })
    ] });
  }
);
FileInput.displayName = "FileInput";

exports.FileInput = FileInput;
//# sourceMappingURL=FileInput.cjs.map
