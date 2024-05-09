import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const AvatarGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().avatar.group, customTheme);
  return /* @__PURE__ */ jsx("div", { "data-testid": "avatar-group-element", className: twMerge(theme.base, className), ...props, children });
};
AvatarGroup.displayName = "Avatar.Group";

export { AvatarGroup };
//# sourceMappingURL=AvatarGroup.mjs.map
