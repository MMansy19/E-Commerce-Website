'use strict';

var jsxRuntime = require('react/jsx-runtime');
var client = require('./client.cjs');
var mode = require('./mode.cjs');
var server = require('./server.cjs');

function ThemeInit({ mode: mode$1, theme }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(mode.ThemeModeInit, { mode: mode$1 }),
    /* @__PURE__ */ jsxRuntime.jsx(server.ThemeServerInit, { theme }),
    /* @__PURE__ */ jsxRuntime.jsx(client.ThemeClientInit, { theme })
  ] });
}

exports.ThemeInit = ThemeInit;
//# sourceMappingURL=index.cjs.map
