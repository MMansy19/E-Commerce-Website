'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FloatingLabel = React.forwardRef(
  ({
    label,
    helperText,
    color = "default",
    sizing = "md",
    variant,
    disabled = false,
    theme: customTheme = {},
    className,
    ...props
  }, ref) => {
    const randomId = React.useId();
    const theme = mergeDeep.mergeDeep(index.getTheme().floatingLabel, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge("relative", variant === "standard" ? "z-0" : ""), children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "text",
            id: props.id ? props.id : "floatingLabel" + randomId,
            "aria-describedby": "outlined_success_help",
            className: tailwindMerge.twMerge(theme.input[color][variant][sizing], className),
            placeholder: " ",
            "data-testid": "floating-label",
            disabled,
            ...props,
            ref
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "label",
          {
            htmlFor: props.id ? props.id : "floatingLabel" + randomId,
            className: tailwindMerge.twMerge(theme.label[color][variant][sizing], className),
            children: label
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("p", { id: "outlined_helper_text" + randomId, className: tailwindMerge.twMerge(theme.helperText[color], className), children: helperText })
    ] });
  }
);
FloatingLabel.displayName = "FloatingLabel";

exports.FloatingLabel = FloatingLabel;
//# sourceMappingURL=FloatingLabel.cjs.map
