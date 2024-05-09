import { jsxs, jsx } from 'react/jsx-runtime';
import { HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Alert = ({
  additionalContent,
  children,
  className,
  color = "info",
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme = mergeDeep(getTheme().alert, customTheme);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className
      ),
      role: "alert",
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: theme.wrapper, "data-testid": "flowbite-alert-wrapper", children: [
          Icon && /* @__PURE__ */ jsx(Icon, { className: theme.icon, "data-testid": "flowbite-alert-icon" }),
          /* @__PURE__ */ jsx("div", { children }),
          typeof onDismiss === "function" && /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Dismiss",
              className: twMerge(theme.closeButton.base, theme.closeButton.color[color]),
              onClick: onDismiss,
              type: "button",
              children: /* @__PURE__ */ jsx(HiX, { "aria-hidden": true, className: theme.closeButton.icon })
            }
          )
        ] }),
        additionalContent && /* @__PURE__ */ jsx("div", { children: additionalContent })
      ]
    }
  );
};
Alert.displayName = "Alert";

export { Alert };
//# sourceMappingURL=Alert.mjs.map
