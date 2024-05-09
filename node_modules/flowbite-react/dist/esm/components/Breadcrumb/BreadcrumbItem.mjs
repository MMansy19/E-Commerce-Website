import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const BreadcrumbItem = forwardRef(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";
    const theme = mergeDeep(getTheme().breadcrumb.item, customTheme);
    return /* @__PURE__ */ jsxs("li", { className: twMerge(theme.base, className), ...props, children: [
      /* @__PURE__ */ jsx(HiOutlineChevronRight, { "aria-hidden": true, className: theme.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      /* @__PURE__ */ jsxs(
        Component,
        {
          ref,
          className: theme.href[isLink ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href,
          children: [
            Icon && /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, className: theme.icon }),
            children
          ]
        }
      )
    ] });
  }
);
BreadcrumbItem.displayName = "Breadcrumb.Item";

export { BreadcrumbItem };
//# sourceMappingURL=BreadcrumbItem.mjs.map
