import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const RatingAdvanced = ({
  children,
  className,
  percentFilled = 0,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().ratingAdvanced, customTheme);
  return /* @__PURE__ */ jsxs("div", { className: twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsx("span", { className: theme.label, children }),
    /* @__PURE__ */ jsx("div", { className: theme.progress.base, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: theme.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${percentFilled}%` }
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: theme.progress.label, children: `${percentFilled}%` })
  ] });
};

export { RatingAdvanced };
//# sourceMappingURL=RatingAdvanced.mjs.map
