'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TimelineContext = require('./TimelineContext.cjs');
var TimelineItemContext = require('./TimelineItemContext.cjs');

const TimelinePoint = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = TimelineContext.useTimelineContext();
  const { theme: itemTheme } = TimelineItemContext.useTimelineItemContext();
  const theme = mergeDeep.mergeDeep(itemTheme.point, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-testid": "timeline-point",
      className: tailwindMerge.twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className),
      ...props,
      children: [
        children,
        Icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: tailwindMerge.twMerge(theme.marker.icon.wrapper), children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": true, className: tailwindMerge.twMerge(theme.marker.icon.base) }) }) : /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: tailwindMerge.twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)
          }
        ),
        horizontal && /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.line) })
      ]
    }
  );
};

exports.TimelinePoint = TimelinePoint;
//# sourceMappingURL=TimelinePoint.cjs.map
