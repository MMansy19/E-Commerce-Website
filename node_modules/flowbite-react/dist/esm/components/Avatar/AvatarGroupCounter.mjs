import { jsxs } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const AvatarGroupCounter = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar.groupCounter, customTheme);
  return /* @__PURE__ */ jsxs("a", { href, className: twMerge(theme.base, className), ...props, children: [
    "+",
    total
  ] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";

export { AvatarGroupCounter };
//# sourceMappingURL=AvatarGroupCounter.mjs.map
