import { jsx, jsxs } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FooterBrand = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.brand, customTheme);
  return /* @__PURE__ */ jsx("div", { children: href ? /* @__PURE__ */ jsxs("a", { "data-testid": "flowbite-footer-brand", href, className: twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsx("img", { alt, src, className: theme.img }),
    /* @__PURE__ */ jsx("span", { "data-testid": "flowbite-footer-brand-span", className: theme.span, children: name }),
    children
  ] }) : /* @__PURE__ */ jsx(
    "img",
    {
      alt,
      "data-testid": "flowbite-footer-brand",
      src,
      className: twMerge(theme.img, className),
      ...props
    }
  ) });
};

export { FooterBrand };
//# sourceMappingURL=FooterBrand.mjs.map
