import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const PaginationButton = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: twMerge(active && theme.pages.selector.active, className),
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
  const theme = mergeDeep(getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: twMerge(disabled && theme.pages.selector.disabled, className),
      disabled,
      onClick,
      ...props,
      children
    }
  );
};
PaginationNavigation.displayName = "Pagination.Navigation";

export { PaginationButton, PaginationNavigation };
//# sourceMappingURL=PaginationButton.mjs.map
