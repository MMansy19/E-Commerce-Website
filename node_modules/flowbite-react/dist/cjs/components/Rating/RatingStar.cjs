'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var RatingContext = require('./RatingContext.cjs');

const RatingStar = ({
  className,
  filled = true,
  starIcon: Icon = hi.HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, size = "sm" } = RatingContext.useRatingContext();
  const theme = mergeDeep.mergeDeep(rootTheme.star, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Icon,
    {
      "data-testid": "flowbite-rating-star",
      className: tailwindMerge.twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className),
      ...props
    }
  );
};

exports.RatingStar = RatingStar;
//# sourceMappingURL=RatingStar.cjs.map
