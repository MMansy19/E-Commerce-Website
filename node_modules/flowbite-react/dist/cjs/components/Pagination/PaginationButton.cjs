'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const PaginationButton = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      className: tailwindMerge.twMerge(active && theme.pages.selector.active, className),
      onClick,
      ...props,
      children
    }
  );
};
PaginationButton.displayName = "Pagination.Button";
const PaginationNavigation = ({
  children,
  className,
  onClick,
  theme: customTheme = {},
  disabled = false,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      className: tailwindMerge.twMerge(disabled && theme.pages.selector.disabled, className),
      disabled,
      onClick,
      ...props,
      children
    }
  );
};
PaginationNavigation.displayName = "Pagination.Navigation";

exports.PaginationButton = PaginationButton;
exports.PaginationNavigation = PaginationNavigation;
//# sourceMappingURL=PaginationButton.cjs.map
