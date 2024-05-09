'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var ToastContext = require('./ToastContext.cjs');
var ToastToggle = require('./ToastToggle.cjs');

const durationClasses = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
const ToastComponent = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const [isClosed, setIsClosed] = React.useState(false);
  const [isRemoved, setIsRemoved] = React.useState(false);
  const theme = mergeDeep.mergeDeep(index.getTheme().toast, customTheme);
  if (isRemoved) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ToastContext.ToastContext.Provider, { value: { theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: tailwindMerge.twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className),
      ...props,
      children
    }
  ) });
};
ToastComponent.displayName = "Toast";
ToastToggle.ToastToggle.displayName = "Toast.Toggle";
const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle.ToastToggle
});

exports.Toast = Toast;
//# sourceMappingURL=Toast.cjs.map
