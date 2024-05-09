import { jsxs, jsx } from 'react/jsx-runtime';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { range } from './helpers.mjs';
import { PaginationButton, PaginationNavigation } from './PaginationButton.mjs';

const PaginationComponent = ({
  className,
  currentPage,
  layout = "pagination",
  nextLabel = "Next",
  onPageChange,
  previousLabel = "Previous",
  renderPaginationButton = (props2) => /* @__PURE__ */ jsx(PaginationButton, { ...props2 }),
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);
  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return /* @__PURE__ */ jsxs("nav", { className: twMerge(theme.base, className), ...props, children: [
    layout === "table" && /* @__PURE__ */ jsxs("div", { className: theme.layout.table.base, children: [
      "Showing ",
      /* @__PURE__ */ jsx("span", { className: theme.layout.table.span, children: firstPage }),
      " to\xA0",
      /* @__PURE__ */ jsx("span", { className: theme.layout.table.span, children: lastPage }),
      " of\xA0",
      /* @__PURE__ */ jsx("span", { className: theme.layout.table.span, children: totalPages }),
      " Entries"
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: theme.pages.base, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        PaginationNavigation,
        {
          className: twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon),
          onClick: goToPreviousPage,
          disabled: currentPage === 1,
          children: [
            showIcon && /* @__PURE__ */ jsx(HiChevronLeft, { "aria-hidden": true, className: theme.pages.previous.icon }),
            previousLabel
          ]
        }
      ) }),
      layout === "pagination" && range(firstPage, lastPage).map((page) => /* @__PURE__ */ jsx("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
        className: twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
        active: page === currentPage,
        onClick: () => onPageChange(page),
        children: page
      }) }, page)),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        PaginationNavigation,
        {
          className: twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon),
          onClick: goToNextPage,
          disabled: currentPage === totalPages,
          children: [
            nextLabel,
            showIcon && /* @__PURE__ */ jsx(HiChevronRight, { "aria-hidden": true, className: theme.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
PaginationComponent.displayName = "Pagination";
const Pagination = Object.assign(PaginationComponent, {
  Button: PaginationButton
});

export { Pagination };
//# sourceMappingURL=Pagination.mjs.map
