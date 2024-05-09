'use strict';

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../theme-store/init/index.cjs');

const Flowbite = ({ children, theme }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.ThemeInit, { mode: theme?.mode, theme: theme?.theme }),
    children
  ] });
};
Flowbite.displayName = "Flowbite";

exports.Flowbite = Flowbite;
//# sourceMappingURL=Flowbite.cjs.map
