'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const RatingAdvanced = ({
  children,
  className,
  percentFilled = 0,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().ratingAdvanced, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.label, children }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.progress.base, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: theme.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${percentFilled}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.progress.label, children: `${percentFilled}%` })
  ] });
};

exports.RatingAdvanced = RatingAdvanced;
//# sourceMappingURL=RatingAdvanced.cjs.map
