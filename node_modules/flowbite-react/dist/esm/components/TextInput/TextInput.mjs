import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { HelperText } from '../HelperText/HelperText.mjs';

const TextInput = forwardRef(
  ({
    addon,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    rightIcon: RightIcon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    type = "text",
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().textInput, customTheme);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: twMerge(theme.base, className), children: [
        addon && /* @__PURE__ */ jsx("span", { className: theme.addon, children: addon }),
        /* @__PURE__ */ jsxs("div", { className: theme.field.base, children: [
          Icon && /* @__PURE__ */ jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsx(Icon, { className: theme.field.icon.svg }) }),
          RightIcon && /* @__PURE__ */ jsx("div", { "data-testid": "right-icon", className: theme.field.rightIcon.base, children: /* @__PURE__ */ jsx(RightIcon, { className: theme.field.rightIcon.svg }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? "on" : "off"],
                theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme.field.input.withAddon[addon ? "on" : "off"],
                theme.field.input.withShadow[shadow ? "on" : "off"]
              ),
              type,
              ...props,
              ref
            }
          )
        ] })
      ] }),
      helperText && /* @__PURE__ */ jsx(HelperText, { color, children: helperText })
    ] });
  }
);
TextInput.displayName = "TextInput";

export { TextInput };
//# sourceMappingURL=TextInput.mjs.map
