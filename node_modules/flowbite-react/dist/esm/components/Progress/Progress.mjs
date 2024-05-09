import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

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
  const id = useId();
  const theme = mergeDeep(getTheme().progress, customTheme);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { id, "aria-label": textLabel, "aria-valuenow": progress, role: "progressbar", ...props, children: [
    (textLabel && labelText && textLabelPosition === "outside" || progress > 0 && labelProgress && progressLabelPosition === "outside") && /* @__PURE__ */ jsxs("div", { className: theme.label, "data-testid": "flowbite-progress-outer-label-container", children: [
      textLabel && labelText && textLabelPosition === "outside" && /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-progress-outer-text-label", children: textLabel }),
      labelProgress && progressLabelPosition === "outside" && /* @__PURE__ */ jsxs("span", { "data-testid": "flowbite-progress-outer-progress-label", children: [
        progress,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: twMerge(theme.base, theme.size[size], className), children: /* @__PURE__ */ jsxs("div", { style: { width: `${progress}%` }, className: twMerge(theme.bar, theme.color[color], theme.size[size]), children: [
      textLabel && labelText && textLabelPosition === "inside" && /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-progress-inner-text-label", children: textLabel }),
      progress > 0 && labelProgress && progressLabelPosition === "inside" && /* @__PURE__ */ jsxs("span", { "data-testid": "flowbite-progress-inner-progress-label", children: [
        progress,
        "%"
      ] })
    ] }) })
  ] }) });
};
Progress.displayName = "Progress";

export { Progress };
//# sourceMappingURL=Progress.mjs.map
