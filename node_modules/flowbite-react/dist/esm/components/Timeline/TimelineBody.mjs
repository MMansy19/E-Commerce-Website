'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTimelineContentContext } from './TimelineContentContext.mjs';

const TimelineBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.body, customTheme);
  return /* @__PURE__ */ jsx("div", { className: twMerge(theme.base, className), ...props, children });
};

export { TimelineBody };
//# sourceMappingURL=TimelineBody.mjs.map
