'use client';
import { jsx } from 'react/jsx-runtime';
import { HiStar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useRatingContext } from './RatingContext.mjs';

const RatingStar = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, size = "sm" } = useRatingContext();
  const theme = mergeDeep(rootTheme.star, customTheme);
  return /* @__PURE__ */ jsx(
    Icon,
    {
      "data-testid": "flowbite-rating-star",
      className: twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className),
      ...props
    }
  );
};

export { RatingStar };
//# sourceMappingURL=RatingStar.mjs.map
