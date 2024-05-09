'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Blockquote = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().blockquote, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("blockquote", { className: tailwindMerge.twMerge(theme.root.base, className), "data-testid": "flowbite-blockquote", ...props, children });
};
Blockquote.displayName = "Blockquote";

exports.Blockquote = Blockquote;
//# sourceMappingURL=Blockquote.cjs.map
