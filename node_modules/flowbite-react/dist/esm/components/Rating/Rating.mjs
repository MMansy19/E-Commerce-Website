'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { RatingAdvanced } from './RatingAdvanced.mjs';
import { RatingContext } from './RatingContext.mjs';
import { RatingStar } from './RatingStar.mjs';

const RatingComponent = ({ children, className, size = "sm", theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().rating, customTheme);
  return /* @__PURE__ */ jsx(RatingContext.Provider, { value: { theme, size }, children: /* @__PURE__ */ jsx("div", { className: twMerge(theme.root.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";
const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced
});

export { Rating };
//# sourceMappingURL=Rating.mjs.map
