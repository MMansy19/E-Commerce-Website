'use client';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMergeRefs, FloatingFocusManager } from '@floating-ui/react';
import { useState, useRef, isValidElement, useMemo, cloneElement } from 'react';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useBaseFLoating, useFloatingInteractions } from '../../hooks/use-floating.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { getArrowPlacement } from '../Floating/helpers.mjs';

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
  const [uncontrolledOpen, setUncontrolledOpen] = useState(Boolean(initialOpen));
  const arrowRef = useRef(null);
  const theme = mergeDeep(getTheme().popover, customTheme);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const floatingProps = useBaseFLoating({
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
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: "dialog",
    trigger
  });
  const childrenRef = children.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);
  if (!isValidElement(children)) {
    throw Error("Invalid target element");
  }
  const target = useMemo(() => {
    return cloneElement(
      children,
      getReferenceProps({
        ref,
        "data-testid": "flowbite-popover-target",
        ...children?.props
      })
    );
  }, [children, ref, getReferenceProps]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    target,
    open && /* @__PURE__ */ jsx(FloatingFocusManager, { context, modal: true, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: theme.base,
        ref: refs.setFloating,
        "data-testid": "flowbite-popover",
        ...props,
        style: floatingStyles,
        ...getFloatingProps(),
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          arrow && /* @__PURE__ */ jsx(
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
                [getArrowPlacement({ placement })]: theme.arrow.placement
              },
              children: "\xA0"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: theme.content, children: content })
        ] })
      }
    ) })
  ] });
}

export { Popover };
//# sourceMappingURL=Popover.mjs.map
