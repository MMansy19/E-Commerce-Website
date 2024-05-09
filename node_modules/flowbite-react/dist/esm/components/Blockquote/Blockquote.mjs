import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Blockquote = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().blockquote, customTheme);
  return /* @__PURE__ */ jsx("blockquote", { className: twMerge(theme.root.base, className), "data-testid": "flowbite-blockquote", ...props, children });
};
Blockquote.displayName = "Blockquote";

export { Blockquote };
//# sourceMappingURL=Blockquote.mjs.map
