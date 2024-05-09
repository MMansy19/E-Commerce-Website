'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const FooterDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().footer.divider, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("hr", { "data-testid": "footer-divider", className: tailwindMerge.twMerge(theme.base, className), ...props });
};

exports.FooterDivider = FooterDivider;
//# sourceMappingURL=FooterDivider.cjs.map
