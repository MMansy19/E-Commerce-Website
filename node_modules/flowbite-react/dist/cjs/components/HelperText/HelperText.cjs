'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const HelperText = ({
  children,
  className,
  color = "default",
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().helperText, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("p", { className: tailwindMerge.twMerge(theme.root.base, theme.root.colors[color], className), ...props, children: value ?? children ?? "" });
};
HelperText.displayName = "HelperText";

exports.HelperText = HelperText;
//# sourceMappingURL=HelperText.cjs.map
