import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterCopyright = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.copyright, customTheme);
  return /* @__PURE__ */ jsxs("div", { "data-testid": "flowbite-footer-copyright", className: twMerge(theme.base, className), ...props, children: [
    "\xA9 ",
    year,
    href ? /* @__PURE__ */ jsx("a", { href, className: theme.href, children: by }) : /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: theme.span, children: by })
  ] });
};

export { FooterCopyright };
//# sourceMappingURL=FooterCopyright.mjs.map
