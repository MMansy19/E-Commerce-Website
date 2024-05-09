'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TimelineContentContext = require('./TimelineContentContext.cjs');

const TimelineTitle = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = TimelineContentContext.useTimelineContentContext();
  const theme = mergeDeep.mergeDeep(contentTheme.title, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(Tag, { className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};

exports.TimelineTitle = TimelineTitle;
//# sourceMappingURL=TimelineTitle.cjs.map
