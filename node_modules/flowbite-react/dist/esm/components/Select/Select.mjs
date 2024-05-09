import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { HelperText } from '../HelperText/HelperText.mjs';

const Select = forwardRef(
  ({
    addon,
    children,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().select, customTheme);
    return /* @__PURE__ */ jsxs("div", { className: twMerge(theme.base, className), children: [
      addon && /* @__PURE__ */ jsx("span", { className: theme.addon, children: addon }),
      /* @__PURE__ */ jsxs("div", { className: theme.field.base, children: [
        Icon && /* @__PURE__ */ jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsx(Icon, { className: theme.field.icon.svg }) }),
        /* @__PURE__ */ jsx(
          "select",
          {
            className: twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[sizing],
              theme.field.select.withIcon[Icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"]
            ),
            ...props,
            ref,
            children
          }
        ),
        helperText && /* @__PURE__ */ jsx(HelperText, { color, children: helperText })
      ] })
    ] });
  }
);
Select.displayName = "Select";

export { Select };
//# sourceMappingURL=Select.mjs.map
