import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const FloatingLabel = forwardRef(
  ({
    label,
    helperText,
    color = "default",
    sizing = "md",
    variant,
    disabled = false,
    theme: customTheme = {},
    className,
    ...props
  }, ref) => {
    const randomId = useId();
    const theme = mergeDeep(getTheme().floatingLabel, customTheme);
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: twMerge("relative", variant === "standard" ? "z-0" : ""), children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: props.id ? props.id : "floatingLabel" + randomId,
            "aria-describedby": "outlined_success_help",
            className: twMerge(theme.input[color][variant][sizing], className),
            placeholder: " ",
            "data-testid": "floating-label",
            disabled,
            ...props,
            ref
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: props.id ? props.id : "floatingLabel" + randomId,
            className: twMerge(theme.label[color][variant][sizing], className),
            children: label
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { id: "outlined_helper_text" + randomId, className: twMerge(theme.helperText[color], className), children: helperText })
    ] });
  }
);
FloatingLabel.displayName = "FloatingLabel";

export { FloatingLabel };
//# sourceMappingURL=FloatingLabel.mjs.map
