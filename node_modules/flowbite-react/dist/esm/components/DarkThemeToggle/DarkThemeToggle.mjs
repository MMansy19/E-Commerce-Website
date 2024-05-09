'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { HiSun, HiMoon } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useIsMounted } from '../../hooks/use-is-mounted.mjs';
import { useThemeMode } from '../../hooks/use-theme-mode.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const DarkThemeToggle = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const isMounted = useIsMounted();
  const { computedMode, toggleMode } = useThemeMode();
  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "aria-label": "Toggle dark mode",
      "data-testid": "dark-theme-toggle",
      className: twMerge(theme.root.base, className),
      onClick: toggleMode,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          IconDark,
          {
            "aria-label": "Currently dark mode",
            "data-active": isMounted && computedMode === "dark",
            className: twMerge(theme.root.icon, "hidden dark:block")
          }
        ),
        /* @__PURE__ */ jsx(
          IconLight,
          {
            "aria-label": "Currently light mode",
            "data-active": isMounted && computedMode === "light",
            className: twMerge(theme.root.icon, "dark:hidden")
          }
        )
      ]
    }
  );
};
DarkThemeToggle.displayName = "DarkThemeToggle";

export { DarkThemeToggle };
//# sourceMappingURL=DarkThemeToggle.mjs.map
