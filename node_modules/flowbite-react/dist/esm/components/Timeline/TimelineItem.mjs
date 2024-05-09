'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTimelineContext } from './TimelineContext.mjs';
import { TimelineItemContext } from './TimelineItemContext.mjs';

const TimelineItem = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = useTimelineContext();
  const theme = mergeDeep(rootTheme.item, customTheme);
  return /* @__PURE__ */ jsx(TimelineItemContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsx(
    "li",
    {
      "data-testid": "timeline-item",
      className: twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className),
      ...props,
      children
    }
  ) });
};

export { TimelineItem };
//# sourceMappingURL=TimelineItem.mjs.map
