'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var HelperText = require('../HelperText/HelperText.cjs');

const Select = React.forwardRef(
  ({
    addon,
    children,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().select, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge(theme.base, className), children: [
      addon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.addon, children: addon }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: theme.field.base, children: [
        Icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.field.icon.svg }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "select",
          {
            className: tailwindMerge.twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[sizing],
              theme.field.select.withIcon[Icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"]
            ),
            ...props,
            ref,
            children
          }
        ),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(HelperText.HelperText, { color, children: helperText })
      ] })
    ] });
  }
);
Select.displayName = "Select";

exports.Select = Select;
//# sourceMappingURL=Select.cjs.map
