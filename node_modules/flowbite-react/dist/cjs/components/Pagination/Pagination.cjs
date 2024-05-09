'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var helpers = require('./helpers.cjs');
var PaginationButton = require('./PaginationButton.cjs');

const PaginationComponent = ({
  className,
  currentPage,
  layout = "pagination",
  nextLabel = "Next",
  onPageChange,
  previousLabel = "Previous",
  renderPaginationButton = (props2) => /* @__PURE__ */ jsxRuntime.jsx(PaginationButton.PaginationButton, { ...props2 }),
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().pagination, customTheme);
  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("nav", { className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
    layout === "table" && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: theme.layout.table.base, children: [
      "Showing ",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.layout.table.span, children: firstPage }),
      " to\xA0",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.layout.table.span, children: lastPage }),
      " of\xA0",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: theme.layout.table.span, children: totalPages }),
      " Entries"
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: theme.pages.base, children: [
      /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
        PaginationButton.PaginationNavigation,
        {
          className: tailwindMerge.twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon),
          onClick: goToPreviousPage,
          disabled: currentPage === 1,
          children: [
            showIcon && /* @__PURE__ */ jsxRuntime.jsx(hi.HiChevronLeft, { "aria-hidden": true, className: theme.pages.previous.icon }),
            previousLabel
          ]
        }
      ) }),
      layout === "pagination" && helpers.range(firstPage, lastPage).map((page) => /* @__PURE__ */ jsxRuntime.jsx("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
        className: tailwindMerge.twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
        active: page === currentPage,
        onClick: () => onPageChange(page),
        children: page
      }) }, page)),
      /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
        PaginationButton.PaginationNavigation,
        {
          className: tailwindMerge.twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon),
          onClick: goToNextPage,
          disabled: currentPage === totalPages,
          children: [
            nextLabel,
            showIcon && /* @__PURE__ */ jsxRuntime.jsx(hi.HiChevronRight, { "aria-hidden": true, className: theme.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
PaginationComponent.displayName = "Pagination";
const Pagination = Object.assign(PaginationComponent, {
  Button: PaginationButton.PaginationButton
});

exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.cjs.map
