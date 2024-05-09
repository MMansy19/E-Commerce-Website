'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TimelineContext = require('./TimelineContext.cjs');
var TimelineItemContext = require('./TimelineItemContext.cjs');

const TimelineItem = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = TimelineContext.useTimelineContext();
  const theme = mergeDeep.mergeDeep(rootTheme.item, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(TimelineItemContext.TimelineItemContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      "data-testid": "timeline-item",
      className: tailwindMerge.twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className),
      ...props,
      children
    }
  ) });
};

exports.TimelineItem = TimelineItem;
//# sourceMappingURL=TimelineItem.cjs.map
