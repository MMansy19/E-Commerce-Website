'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');

const AvatarGroupCounter = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().avatar.groupCounter, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs("a", { href, className: tailwindMerge.twMerge(theme.base, className), ...props, children: [
    "+",
    total
  ] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";

exports.AvatarGroupCounter = AvatarGroupCounter;
//# sourceMappingURL=AvatarGroupCounter.cjs.map
