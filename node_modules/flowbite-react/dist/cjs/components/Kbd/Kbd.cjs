'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const Kbd = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().kbd, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: tailwindMerge.twMerge(theme.root.base, className), "data-testid": "flowbite-kbd", ...props, children: [
    Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.root.icon, "data-testid": "flowbite-kbd-icon" }),
    children
  ] });
};
Kbd.displayName = "Kbd";

exports.Kbd = Kbd;
//# sourceMappingURL=Kbd.cjs.map
