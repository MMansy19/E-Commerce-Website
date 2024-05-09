'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTimelineContentContext } from './TimelineContentContext.mjs';

const TimelineTime = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.time, customTheme);
  return /* @__PURE__ */ jsx("time", { className: twMerge(theme.base, className), ...props, children });
};

export { TimelineTime };
//# sourceMappingURL=TimelineTime.mjs.map
