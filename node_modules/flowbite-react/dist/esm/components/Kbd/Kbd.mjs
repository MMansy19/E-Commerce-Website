import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Kbd = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().kbd, customTheme);
  return /* @__PURE__ */ jsxs("span", { className: twMerge(theme.root.base, className), "data-testid": "flowbite-kbd", ...props, children: [
    Icon && /* @__PURE__ */ jsx(Icon, { className: theme.root.icon, "data-testid": "flowbite-kbd-icon" }),
    children
  ] });
};
Kbd.displayName = "Kbd";

export { Kbd };
//# sourceMappingURL=Kbd.mjs.map
