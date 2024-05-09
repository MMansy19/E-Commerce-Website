'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTimelineContext } from './TimelineContext.mjs';
import { useTimelineItemContext } from './TimelineItemContext.mjs';

const TimelinePoint = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme = mergeDeep(itemTheme.point, customTheme);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-testid": "timeline-point",
      className: twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className),
      ...props,
      children: [
        children,
        Icon ? /* @__PURE__ */ jsx("span", { className: twMerge(theme.marker.icon.wrapper), children: /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, className: twMerge(theme.marker.icon.base) }) }) : /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)
          }
        ),
        horizontal && /* @__PURE__ */ jsx("div", { className: twMerge(theme.line) })
      ]
    }
  );
};

export { TimelinePoint };
//# sourceMappingURL=TimelinePoint.mjs.map
