'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TimelineContentContext = require('./TimelineContentContext.cjs');

const TimelineTime = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = TimelineContentContext.useTimelineContentContext();
  const theme = mergeDeep.mergeDeep(contentTheme.time, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("time", { className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};

exports.TimelineTime = TimelineTime;
//# sourceMappingURL=TimelineTime.cjs.map
