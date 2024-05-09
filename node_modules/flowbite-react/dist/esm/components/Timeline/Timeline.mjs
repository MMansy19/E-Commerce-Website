'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { TimelineBody } from './TimelineBody.mjs';
import { TimelineContent } from './TimelineContent.mjs';
import { TimelineContext } from './TimelineContext.mjs';
import { TimelineItem } from './TimelineItem.mjs';
import { TimelinePoint } from './TimelinePoint.mjs';
import { TimelineTime } from './TimelineTime.mjs';
import { TimelineTitle } from './TimelineTitle.mjs';

const TimelineComponent = ({
  children,
  className,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().timeline, customTheme);
  return /* @__PURE__ */ jsx(TimelineContext.Provider, { value: { theme, horizontal }, children: /* @__PURE__ */ jsx(
    "ol",
    {
      "data-testid": "timeline-component",
      className: twMerge(
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
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";
const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody
});

export { Timeline };
//# sourceMappingURL=Timeline.mjs.map
