'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var RatingAdvanced = require('./RatingAdvanced.cjs');
var RatingContext = require('./RatingContext.cjs');
var RatingStar = require('./RatingStar.cjs');

const RatingComponent = ({ children, className, size = "sm", theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().rating, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(RatingContext.RatingContext.Provider, { value: { theme, size }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.root.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.RatingStar.displayName = "Rating.Star";
RatingAdvanced.RatingAdvanced.displayName = "Rating.Advanced";
const Rating = Object.assign(RatingComponent, {
  Star: RatingStar.RatingStar,
  Advanced: RatingAdvanced.RatingAdvanced
});

exports.Rating = Rating;
//# sourceMappingURL=Rating.cjs.map
