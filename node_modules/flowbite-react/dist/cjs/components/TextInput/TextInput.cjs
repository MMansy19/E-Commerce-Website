'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var HelperText = require('../HelperText/HelperText.cjs');

const TextInput = React.forwardRef(
  ({
    addon,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    rightIcon: RightIcon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    type = "text",
    ...props
  }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().textInput, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge(theme.base, className), children: [
        addon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.addon, children: addon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: theme.field.base, children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.field.icon.svg }) }),
          RightIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "right-icon", className: theme.field.rightIcon.base, children: /* @__PURE__ */ jsxRuntime.jsx(RightIcon, { className: theme.field.rightIcon.svg }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              className: tailwindMerge.twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? "on" : "off"],
                theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme.field.input.withAddon[addon ? "on" : "off"],
                theme.field.input.withShadow[shadow ? "on" : "off"]
              ),
              type,
              ...props,
              ref
            }
          )
        ] })
      ] }),
      helperText && /* @__PURE__ */ jsxRuntime.jsx(HelperText.HelperText, { color, children: helperText })
    ] });
  }
);
TextInput.displayName = "TextInput";

exports.TextInput = TextInput;
//# sourceMappingURL=TextInput.cjs.map
