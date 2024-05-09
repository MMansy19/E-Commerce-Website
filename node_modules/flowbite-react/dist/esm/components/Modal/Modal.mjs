'use client';
import { jsx } from 'react/jsx-runtime';
import { useFloating, useMergeRefs, useClick, useDismiss, useRole, useInteractions, FloatingPortal, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { ModalBody } from './ModalBody.mjs';
import { ModalContext } from './ModalContext.mjs';
import { ModalFooter } from './ModalFooter.mjs';
import { ModalHeader } from './ModalHeader.mjs';

const ModalComponent = forwardRef(
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
    const [headerId, setHeaderId] = useState(void 0);
    const theme = mergeDeep(getTheme().modal, customTheme);
    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose()
    });
    const ref = useMergeRefs([context.refs.setFloating, theirRef]);
    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([click, dismiss, role]);
    if (!show) {
      return null;
    }
    return /* @__PURE__ */ jsx(ModalContext.Provider, { value: { theme, popup, onClose, setHeaderId }, children: /* @__PURE__ */ jsx(FloatingPortal, { root, children: /* @__PURE__ */ jsx(
      FloatingOverlay,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: twMerge(
          theme.root.base,
          theme.root.positions[position],
          show ? theme.root.show.on : theme.root.show.off,
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx(FloatingFocusManager, { context, initialFocus, children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            ...getFloatingProps(props),
            "aria-labelledby": headerId,
            className: twMerge(theme.content.base, theme.root.sizes[size]),
            children: /* @__PURE__ */ jsx("div", { className: theme.content.inner, children })
          }
        ) })
      }
    ) }) });
  }
);
ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});

export { Modal };
//# sourceMappingURL=Modal.mjs.map
