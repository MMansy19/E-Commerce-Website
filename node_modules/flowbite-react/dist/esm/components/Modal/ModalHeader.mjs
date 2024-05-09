'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useId, useLayoutEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useModalContext } from './ModalContext.mjs';

const ModalHeader = ({
  as: Component = "h3",
  children,
  className,
  theme: customTheme = {},
  id,
  ...props
}) => {
  const innerHeaderId = useId();
  const headerId = id || innerHeaderId;
  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext();
  const theme = mergeDeep(rootTheme.header, customTheme);
  useLayoutEffect(() => {
    setHeaderId(headerId);
    return () => setHeaderId(void 0);
  }, [headerId, setHeaderId]);
  return /* @__PURE__ */ jsxs("div", { className: twMerge(theme.base, popup && theme.popup, className), ...props, children: [
    /* @__PURE__ */ jsx(Component, { id: headerId, className: theme.title, children }),
    /* @__PURE__ */ jsx("button", { "aria-label": "Close", className: theme.close.base, type: "button", onClick: onClose, children: /* @__PURE__ */ jsx(HiOutlineX, { "aria-hidden": true, className: theme.close.icon }) })
  ] });
};

export { ModalHeader };
//# sourceMappingURL=ModalHeader.mjs.map
