import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const ListItem = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list.item, customTheme);
  return /* @__PURE__ */ jsxs("li", { className: twMerge(theme.withIcon[Icon ? "on" : "off"], className), ...props, children: [
    Icon && /* @__PURE__ */ jsx(Icon, { className: twMerge(theme.icon) }),
    children
  ] });
};

export { ListItem };
//# sourceMappingURL=ListItem.mjs.map
