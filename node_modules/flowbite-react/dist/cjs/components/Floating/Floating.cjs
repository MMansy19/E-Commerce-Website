'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@floating-ui/react');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var useFloating = require('../../hooks/use-floating.cjs');
var helpers = require('./helpers.cjs');

const Floating = ({
  animation = "duration-300",
  arrow = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme,
  trigger = "hover",
  minWidth,
  ...props
}) => {
  const arrowRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const floatingProperties = useFloating.useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen
  });
  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y
  } = floatingProperties;
  const focus = react.useFocus(context);
  const { getFloatingProps, getReferenceProps } = useFloating.useFloatingInteractions({
    context,
    role: "tooltip",
    trigger,
    interactions: [focus]
  });
  React.useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return react.autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: refs.setReference,
        className: theme.target,
        "data-testid": "flowbite-tooltip-target",
        ...getReferenceProps(),
        children
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref: refs.setFloating,
        "data-testid": "flowbite-tooltip",
        ...getFloatingProps({
          className: tailwindMerge.twMerge(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style],
            className
          ),
          style: {
            position: strategy,
            top: y ?? " ",
            left: x ?? " ",
            minWidth
          },
          ...props
        }),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.content, children: content }),
          arrow && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: tailwindMerge.twMerge(
                theme.arrow.base,
                style === "dark" && theme.arrow.style.dark,
                style === "light" && theme.arrow.style.light,
                style === "auto" && theme.arrow.style.auto
              ),
              "data-testid": "flowbite-tooltip-arrow",
              ref: arrowRef,
              style: {
                top: arrowY ?? " ",
                left: arrowX ?? " ",
                right: " ",
                bottom: " ",
                [helpers.getArrowPlacement({ placement: floatingProperties.placement })]: theme.arrow.placement
              },
              children: "\xA0"
            }
          )
        ]
      }
    )
  ] });
};

exports.Floating = Floating;
//# sourceMappingURL=Floating.cjs.map
