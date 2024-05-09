'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var useIsMounted = require('../../hooks/use-is-mounted.cjs');
var useThemeMode = require('../../hooks/use-theme-mode.cjs');
var index = require('../../theme-store/index.cjs');

const DarkThemeToggle = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = hi.HiSun,
  iconLight: IconLight = hi.HiMoon,
  ...props
}) => {
  const isMounted = useIsMounted.useIsMounted();
  const { computedMode, toggleMode } = useThemeMode.useThemeMode();
  const theme = mergeDeep.mergeDeep(index.getTheme().darkThemeToggle, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type: "button",
      "aria-label": "Toggle dark mode",
      "data-testid": "dark-theme-toggle",
      className: tailwindMerge.twMerge(theme.root.base, className),
      onClick: toggleMode,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          IconDark,
          {
            "aria-label": "Currently dark mode",
            "data-active": isMounted && computedMode === "dark",
            className: tailwindMerge.twMerge(theme.root.icon, "hidden dark:block")
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          IconLight,
          {
            "aria-label": "Currently light mode",
            "data-active": isMounted && computedMode === "light",
            className: tailwindMerge.twMerge(theme.root.icon, "dark:hidden")
          }
        )
      ]
    }
  );
};
DarkThemeToggle.displayName = "DarkThemeToggle";

exports.DarkThemeToggle = DarkThemeToggle;
//# sourceMappingURL=DarkThemeToggle.cjs.map
