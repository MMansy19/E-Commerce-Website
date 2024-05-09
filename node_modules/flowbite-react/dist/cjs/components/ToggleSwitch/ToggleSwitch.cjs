'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const ToggleSwitch = React.forwardRef(
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
    const id = React.useId();
    const theme = mergeDeep.mergeDeep(index.getTheme().toggleSwitch, customTheme);
    const toggle = () => onChange(!checked);
    const handleClick = () => {
      toggle();
    };
    const handleOnKeyDown = (event) => {
      if (event.code == "Enter") {
        event.preventDefault();
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      name && checked ? /* @__PURE__ */ jsxRuntime.jsx("input", { ref, checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      /* @__PURE__ */ jsxRuntime.jsxs(
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
          className: tailwindMerge.twMerge(theme.root.base, theme.root.active[disabled ? "off" : "on"], className),
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: tailwindMerge.twMerge(
                  theme.toggle.base,
                  theme.toggle.checked[checked ? "on" : "off"],
                  checked && theme.toggle.checked.color[color],
                  theme.toggle.sizes[sizing]
                )
              }
            ),
            label?.length ? /* @__PURE__ */ jsxRuntime.jsx(
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

exports.ToggleSwitch = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.cjs.map
