import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { ThemeInit } from '../../theme-store/init/index.mjs';

const Flowbite = ({ children, theme }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThemeInit, { mode: theme?.mode, theme: theme?.theme }),
    children
  ] });
};
Flowbite.displayName = "Flowbite";

export { Flowbite };
//# sourceMappingURL=Flowbite.mjs.map
