import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const ToggleSwitch = forwardRef(
  ({
    checked,
    className,
    color = "blue",
    sizing = "md",
    disabled,
    label,
    name,
    onChange,
    theme: customTheme = {},
    ...props
  }, ref) => {
    const id = useId();
    const theme = mergeDeep(getTheme().toggleSwitch, customTheme);
    const toggle = () => onChange(!checked);
    const handleClick = () => {
      toggle();
    };
    const handleOnKeyDown = (event) => {
      if (event.code == "Enter") {
        event.preventDefault();
      }
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      name && checked ? /* @__PURE__ */ jsx("input", { ref, checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      /* @__PURE__ */ jsxs(
        "button",
        {
          "aria-checked": checked,
          "aria-labelledby": `${id}-flowbite-toggleswitch-label`,
          disabled,
          id: `${id}-flowbite-toggleswitch`,
          onClick: handleClick,
          onKeyDown: handleOnKeyDown,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: twMerge(theme.root.base, theme.root.active[disabled ? "off" : "on"], className),
          ...props,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: twMerge(
                  theme.toggle.base,
                  theme.toggle.checked[checked ? "on" : "off"],
                  checked && theme.toggle.checked.color[color],
                  theme.toggle.sizes[sizing]
                )
              }
            ),
            label?.length ? /* @__PURE__ */ jsx(
              "span",
              {
                "data-testid": "flowbite-toggleswitch-label",
                id: `${id}-flowbite-toggleswitch-label`,
                className: theme.root.label,
                children: label
              }
            ) : null
          ]
        }
      )
    ] });
  }
);
ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch };
//# sourceMappingURL=ToggleSwitch.mjs.map
