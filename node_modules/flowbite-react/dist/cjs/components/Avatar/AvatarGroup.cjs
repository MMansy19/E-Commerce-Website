'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const AvatarGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().avatar.group, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "avatar-group-element", className: tailwindMerge.twMerge(theme.base, className), ...props, children });
};
AvatarGroup.displayName = "Avatar.Group";

exports.AvatarGroup = AvatarGroup;
//# sourceMappingURL=AvatarGroup.cjs.map
