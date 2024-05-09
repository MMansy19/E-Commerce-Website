import { jsx, jsxs } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Badge = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme);
  const Content = () => /* @__PURE__ */ jsxs(
    "span",
    {
      className: twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? "on" : "off"],
        className
      ),
      "data-testid": "flowbite-badge",
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, className: theme.icon.size[size], "data-testid": "flowbite-badge-icon" }),
        children && /* @__PURE__ */ jsx("span", { children })
      ]
    }
  );
  return href ? /* @__PURE__ */ jsx("a", { className: theme.root.href, href, children: /* @__PURE__ */ jsx(Content, {}) }) : /* @__PURE__ */ jsx(Content, {});
};
Badge.displayName = "Badge";

export { Badge };
//# sourceMappingURL=Badge.mjs.map
