'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TimelineContentContext = require('./TimelineContentContext.cjs');

const TimelineBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = TimelineContentContext.useTimelineContentContext();
  const theme = mergeDeep.mergeDeep(contentTheme.body, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};

exports.TimelineBody = TimelineBody;
//# sourceMappingURL=TimelineBody.cjs.map
