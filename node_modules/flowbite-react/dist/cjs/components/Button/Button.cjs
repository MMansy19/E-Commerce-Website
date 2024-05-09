'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var Spinner = require('../Spinner/Spinner.cjs');
var ButtonBase = require('./ButtonBase.cjs');
var ButtonGroup = require('./ButtonGroup.cjs');

const ButtonComponent = React.forwardRef(
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
    const { buttonGroup: groupTheme, button: buttonTheme } = index.getTheme();
    const theme = mergeDeep.mergeDeep(buttonTheme, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      ButtonBase.ButtonBase,
      {
        ref,
        disabled,
        className: tailwindMerge.twMerge(
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
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: tailwindMerge.twMerge(
              theme.inner.base,
              theme.outline[outline ? "on" : "off"],
              theme.outline.pill[outline && pill ? "on" : "off"],
              theme.size[size],
              outline && !theme.outline.color[color] && theme.inner.outline,
              isProcessing && theme.isProcessing,
              isProcessing && theme.inner.isProcessingPadding[size],
              theme.inner.position[positionInGroup]
            ),
            children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              isProcessing && /* @__PURE__ */ jsxRuntime.jsx("span", { className: tailwindMerge.twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size]), children: processingSpinner || /* @__PURE__ */ jsxRuntime.jsx(Spinner.Spinner, { size }) }),
              typeof children !== "undefined" ? children : /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-button-label", className: tailwindMerge.twMerge(theme.label), children: isProcessing ? processingLabel : label })
            ] })
          }
        )
      }
    );
  }
);
ButtonComponent.displayName = "Button";
const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup.ButtonGroup
});

exports.Button = Button;
//# sourceMappingURL=Button.cjs.map
