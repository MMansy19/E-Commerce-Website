import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterIcon = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.icon, customTheme);
  return /* @__PURE__ */ jsx("div", { children: href ? /* @__PURE__ */ jsx(
    "a",
    {
      "aria-label": ariaLabel,
      "data-testid": "flowbite-footer-icon",
      href,
      className: twMerge(theme.base, className),
      ...props,
      children: /* @__PURE__ */ jsx(Icon, { className: theme.size })
    }
  ) : /* @__PURE__ */ jsx(Icon, { "data-testid": "flowbite-footer-icon", className: theme.size, ...props }) });
};

export { FooterIcon };
//# sourceMappingURL=FooterIcon.mjs.map
