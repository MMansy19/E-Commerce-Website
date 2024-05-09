import { jsx } from 'react/jsx-runtime';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { Floating } from '../Floating/Floating.mjs';

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
  const theme = mergeDeep(getTheme().tooltip, customTheme);
  return /* @__PURE__ */ jsx(
    Floating,
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

export { Tooltip };
//# sourceMappingURL=Tooltip.mjs.map
