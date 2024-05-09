import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { ThemeClientInit } from './client.mjs';
import { ThemeModeInit } from './mode.mjs';
import { ThemeServerInit } from './server.mjs';

function ThemeInit({ mode, theme }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThemeModeInit, { mode }),
    /* @__PURE__ */ jsx(ThemeServerInit, { theme }),
    /* @__PURE__ */ jsx(ThemeClientInit, { theme })
  ] });
}

export { ThemeInit };
//# sourceMappingURL=index.mjs.map
