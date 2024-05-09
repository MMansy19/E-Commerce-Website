'use strict';

var jsxRuntime = require('react/jsx-runtime');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var Floating = require('../Floating/Floating.cjs');

const Tooltip = ({
  animation = "duration-300",
  arrow = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme: customTheme = {},
  trigger = "hover",
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().tooltip, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Floating.Floating,
    {
      animation,
      arrow,
      content,
      placement,
      style,
      theme,
      trigger,
      className,
      ...props,
      children
    }
  );
};
Tooltip.displayName = "Tooltip";

exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.cjs.map
