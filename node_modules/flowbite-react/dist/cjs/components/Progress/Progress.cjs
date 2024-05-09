'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Progress = ({
  className,
  color = "cyan",
  labelProgress = false,
  labelText = false,
  progress,
  progressLabelPosition = "inside",
  size = "md",
  textLabel = "progressbar",
  textLabelPosition = "inside",
  theme: customTheme = {},
  ...props
}) => {
  const id = React.useId();
  const theme = mergeDeep.mergeDeep(index.getTheme().progress, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { id, "aria-label": textLabel, "aria-valuenow": progress, role: "progressbar", ...props, children: [
    (textLabel && labelText && textLabelPosition === "outside" || progress > 0 && labelProgress && progressLabelPosition === "outside") && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: theme.label, "data-testid": "flowbite-progress-outer-label-container", children: [
      textLabel && labelText && textLabelPosition === "outside" && /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-progress-outer-text-label", children: textLabel }),
      labelProgress && progressLabelPosition === "outside" && /* @__PURE__ */ jsxRuntime.jsxs("span", { "data-testid": "flowbite-progress-outer-progress-label", children: [
        progress,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.base, theme.size[size], className), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { width: `${progress}%` }, className: tailwindMerge.twMerge(theme.bar, theme.color[color], theme.size[size]), children: [
      textLabel && labelText && textLabelPosition === "inside" && /* @__PURE__ */ jsxRuntime.jsx("span", { "data-testid": "flowbite-progress-inner-text-label", children: textLabel }),
      progress > 0 && labelProgress && progressLabelPosition === "inside" && /* @__PURE__ */ jsxRuntime.jsxs("span", { "data-testid": "flowbite-progress-inner-progress-label", children: [
        progress,
        "%"
      ] })
    ] }) })
  ] }) });
};
Progress.displayName = "Progress";

exports.Progress = Progress;
//# sourceMappingURL=Progress.cjs.map
