'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@floating-ui/react');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var ModalBody = require('./ModalBody.cjs');
var ModalContext = require('./ModalContext.cjs');
var ModalFooter = require('./ModalFooter.cjs');
var ModalHeader = require('./ModalHeader.cjs');

const ModalComponent = React.forwardRef(
  ({
    children,
    className,
    dismissible = false,
    onClose,
    popup,
    position = "center",
    root,
    show,
    size = "2xl",
    theme: customTheme = {},
    initialFocus,
    ...props
  }, theirRef) => {
    const [headerId, setHeaderId] = React.useState(void 0);
    const theme = mergeDeep.mergeDeep(index.getTheme().modal, customTheme);
    const { context } = react.useFloating({
      open: show,
      onOpenChange: () => onClose && onClose()
    });
    const ref = react.useMergeRefs([context.refs.setFloating, theirRef]);
    const click = react.useClick(context);
    const dismiss = react.useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
    const role = react.useRole(context);
    const { getFloatingProps } = react.useInteractions([click, dismiss, role]);
    if (!show) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(ModalContext.ModalContext.Provider, { value: { theme, popup, onClose, setHeaderId }, children: /* @__PURE__ */ jsxRuntime.jsx(react.FloatingPortal, { root, children: /* @__PURE__ */ jsxRuntime.jsx(
      react.FloatingOverlay,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: tailwindMerge.twMerge(
          theme.root.base,
          theme.root.positions[position],
          show ? theme.root.show.on : theme.root.show.off,
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx(react.FloatingFocusManager, { context, initialFocus, children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            ref,
            ...getFloatingProps(props),
            "aria-labelledby": headerId,
            className: tailwindMerge.twMerge(theme.content.base, theme.root.sizes[size]),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.content.inner, children })
          }
        ) })
      }
    ) }) });
  }
);
ModalComponent.displayName = "Modal";
ModalHeader.ModalHeader.displayName = "Modal.Header";
ModalBody.ModalBody.displayName = "Modal.Body";
ModalFooter.ModalFooter.displayName = "Modal.Footer";
const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader.ModalHeader,
  Body: ModalBody.ModalBody,
  Footer: ModalFooter.ModalFooter
});

exports.Modal = Modal;
//# sourceMappingURL=Modal.cjs.map
