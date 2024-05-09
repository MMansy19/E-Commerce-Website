import { jsx, jsxs } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const ListGroupItem = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme = mergeDeep(getTheme().listGroup.item, customTheme);
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  return /* @__PURE__ */ jsx("li", { className: twMerge(theme.base, className), children: /* @__PURE__ */ jsxs(
    Component,
    {
      href,
      onClick,
      type: isLink ? void 0 : "button",
      disabled,
      className: twMerge(
        theme.link.active[isActive ? "on" : "off"],
        theme.link.disabled[disabled ? "on" : "off"],
        theme.link.base,
        theme.link.href[isLink ? "on" : "off"]
      ),
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: theme.link.icon }),
        children
      ]
    }
  ) });
};

export { ListGroupItem };
//# sourceMappingURL=ListGroupItem.mjs.map
