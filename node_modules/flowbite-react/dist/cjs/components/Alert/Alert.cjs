'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

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
  const theme = mergeDeep.mergeDeep(index.getTheme().alert, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: tailwindMerge.twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className
      ),
      role: "alert",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: theme.wrapper, "data-testid": "flowbite-alert-wrapper", children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.icon, "data-testid": "flowbite-alert-icon" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { children }),
          typeof onDismiss === "function" && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              "aria-label": "Dismiss",
              className: tailwindMerge.twMerge(theme.closeButton.base, theme.closeButton.color[color]),
              onClick: onDismiss,
              type: "button",
              children: /* @__PURE__ */ jsxRuntime.jsx(hi.HiX, { "aria-hidden": true, className: theme.closeButton.icon })
            }
          )
        ] }),
        additionalContent && /* @__PURE__ */ jsxRuntime.jsx("div", { children: additionalContent })
      ]
    }
  );
};
Alert.displayName = "Alert";

exports.Alert = Alert;
//# sourceMappingURL=Alert.cjs.map
