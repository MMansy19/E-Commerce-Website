import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { Spinner } from '../Spinner/Spinner.mjs';
import { ButtonBase } from './ButtonBase.mjs';
import { ButtonGroup } from './ButtonGroup.mjs';

const ButtonComponent = forwardRef(
  ({
    children,
    className,
    color = "info",
    disabled,
    fullSized,
    isProcessing = false,
    processingLabel = "Loading...",
    processingSpinner,
    gradientDuoTone,
    gradientMonochrome,
    label,
    outline = false,
    pill = false,
    positionInGroup = "none",
    size = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const { buttonGroup: groupTheme, button: buttonTheme } = getTheme();
    const theme = mergeDeep(buttonTheme, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsx(
      ButtonBase,
      {
        ref,
        disabled,
        className: twMerge(
          theme.base,
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.pill[pill ? "on" : "off"],
          fullSized && theme.fullSized,
          groupTheme.position[positionInGroup],
          className
        ),
        ...theirProps,
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: twMerge(
              theme.inner.base,
              theme.outline[outline ? "on" : "off"],
              theme.outline.pill[outline && pill ? "on" : "off"],
              theme.size[size],
              outline && !theme.outline.color[color] && theme.inner.outline,
              isProcessing && theme.isProcessing,
              isProcessing && theme.inner.isProcessingPadding[size],
              theme.inner.position[positionInGroup]
            ),
            children: /* @__PURE__ */ jsxs(Fragment, { children: [
              isProcessing && /* @__PURE__ */ jsx("span", { className: twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size]), children: processingSpinner || /* @__PURE__ */ jsx(Spinner, { size }) }),
              typeof children !== "undefined" ? children : /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-button-label", className: twMerge(theme.label), children: isProcessing ? processingLabel : label })
            ] })
          }
        )
      }
    );
  }
);
ButtonComponent.displayName = "Button";
const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
});

export { Button };
//# sourceMappingURL=Button.mjs.map
