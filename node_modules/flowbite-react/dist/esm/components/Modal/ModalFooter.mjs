'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useModalContext } from './ModalContext.mjs';

const ModalFooter = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme = mergeDeep(rootTheme.footer, customTheme);
  return /* @__PURE__ */ jsx("div", { className: twMerge(theme.base, !popup && theme.popup, className), ...props, children });
};

export { ModalFooter };
//# sourceMappingURL=ModalFooter.mjs.map
