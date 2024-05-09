'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Label = ({
  children,
  className,
  color = "default",
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().label, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "label",
    {
      className: tailwindMerge.twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className),
      "data-testid": "flowbite-label",
      ...props,
      children: value ?? children ?? ""
    }
  );
};
Label.displayName = "Label";

exports.Label = Label;
//# sourceMappingURL=Label.cjs.map
