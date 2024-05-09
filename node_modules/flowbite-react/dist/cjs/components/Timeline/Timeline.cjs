'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var TimelineBody = require('./TimelineBody.cjs');
var TimelineContent = require('./TimelineContent.cjs');
var TimelineContext = require('./TimelineContext.cjs');
var TimelineItem = require('./TimelineItem.cjs');
var TimelinePoint = require('./TimelinePoint.cjs');
var TimelineTime = require('./TimelineTime.cjs');
var TimelineTitle = require('./TimelineTitle.cjs');

const TimelineComponent = ({
  children,
  className,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().timeline, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(TimelineContext.TimelineContext.Provider, { value: { theme, horizontal }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    {
      "data-testid": "timeline-component",
      className: tailwindMerge.twMerge(
        horizontal && theme.root.direction.horizontal,
        !horizontal && theme.root.direction.vertical,
        className
      ),
      ...props,
      children
    }
  ) });
};
TimelineComponent.displayName = "Timeline";
TimelineItem.TimelineItem.displayName = "Timeline.Item";
TimelinePoint.TimelinePoint.displayName = "Timeline.Point";
TimelineContent.TimelineContent.displayName = "Timeline.Content";
TimelineTime.TimelineTime.displayName = "Timeline.Time";
TimelineTitle.TimelineTitle.displayName = "Timeline.Title";
TimelineBody.TimelineBody.displayName = "Timeline.Body";
const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem.TimelineItem,
  Point: TimelinePoint.TimelinePoint,
  Content: TimelineContent.TimelineContent,
  Time: TimelineTime.TimelineTime,
  Title: TimelineTitle.TimelineTitle,
  Body: TimelineBody.TimelineBody
});

exports.Timeline = Timeline;
//# sourceMappingURL=Timeline.cjs.map
