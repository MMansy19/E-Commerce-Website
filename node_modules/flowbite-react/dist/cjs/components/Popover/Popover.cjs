'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@floating-ui/react');
var React = require('react');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var useFloating = require('../../hooks/use-floating.cjs');
var index = require('../../theme-store/index.cjs');
var helpers = require('../Floating/helpers.cjs');

function Popover({
  children,
  content,
  theme: customTheme = {},
  arrow = true,
  trigger = "click",
  initialOpen,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement: theirPlacement = "bottom",
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(Boolean(initialOpen));
  const arrowRef = React.useRef(null);
  const theme = mergeDeep.mergeDeep(index.getTheme().popover, customTheme);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const floatingProps = useFloating.useBaseFLoating({
    open,
    placement: theirPlacement,
    arrowRef,
    setOpen
  });
  const {
    floatingStyles,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs
  } = floatingProps;
  const { getFloatingProps, getReferenceProps } = useFloating.useFloatingInteractions({
    context,
    role: "dialog",
    trigger
  });
  const childrenRef = children.ref;
  const ref = react.useMergeRefs([context.refs.setReference, childrenRef]);
  if (!React.isValidElement(children)) {
    throw Error("Invalid target element");
  }
  const target = React.useMemo(() => {
    return React.cloneElement(
      children,
      getReferenceProps({
        ref,
        "data-testid": "flowbite-popover-target",
        ...children?.props
      })
    );
  }, [children, ref, getReferenceProps]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    target,
    open && /* @__PURE__ */ jsxRuntime.jsx(react.FloatingFocusManager, { context, modal: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: theme.base,
        ref: refs.setFloating,
        "data-testid": "flowbite-popover",
        ...props,
        style: floatingStyles,
        ...getFloatingProps(),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          arrow && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: theme.arrow.base,
              "data-testid": "flowbite-popover-arrow",
              ref: arrowRef,
              style: {
                top: arrowY ?? " ",
                left: arrowX ?? " ",
                right: " ",
                bottom: " ",
                [helpers.getArrowPlacement({ placement })]: theme.arrow.placement
              },
              children: "\xA0"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.content, children: content })
        ] })
      }
    ) })
  ] });
}

exports.Popover = Popover;
//# sourceMappingURL=Popover.cjs.map
