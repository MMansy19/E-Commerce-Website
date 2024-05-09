'use client';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { ToastContext } from './ToastContext.mjs';
import { ToastToggle } from './ToastToggle.mjs';

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
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const theme = mergeDeep(getTheme().toast, customTheme);
  if (isRemoved) {
    return null;
  }
  return /* @__PURE__ */ jsx(ToastContext.Provider, { value: { theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className),
      ...props,
      children
    }
  ) });
};
ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";
const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle
});

export { Toast };
//# sourceMappingURL=Toast.mjs.map
