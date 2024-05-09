'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTimelineContentContext } from './TimelineContentContext.mjs';

const TimelineTitle = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.title, customTheme);
  return /* @__PURE__ */ jsx(Tag, { className: twMerge(theme.base, className), ...props, children });
};

export { TimelineTitle };
//# sourceMappingURL=TimelineTitle.mjs.map
