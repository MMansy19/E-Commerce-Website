import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { BreadcrumbItem } from './BreadcrumbItem.mjs';

const BreadcrumbComponent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().breadcrumb.root, customTheme);
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsx("ol", { className: theme.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem
});

export { Breadcrumb };
//# sourceMappingURL=Breadcrumb.mjs.map
