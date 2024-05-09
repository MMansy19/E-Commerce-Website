'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const ListItem = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().list.item, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: tailwindMerge.twMerge(theme.withIcon[Icon ? "on" : "off"], className), ...props, children: [
    Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: tailwindMerge.twMerge(theme.icon) }),
    children
  ] });
};

exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.cjs.map
