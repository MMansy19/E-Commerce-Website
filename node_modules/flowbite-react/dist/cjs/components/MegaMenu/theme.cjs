'use strict';

var tailwindMerge = require('tailwind-merge');
var createTheme = require('../../helpers/create-theme.cjs');
var theme$1 = require('../Dropdown/theme.cjs');
var theme = require('../Navbar/theme.cjs');

const megaMenuTheme = createTheme.createTheme({
  ...theme.navbarTheme,
  dropdown: {
    base: "",
    toggle: {
      ...theme$1.dropdownTheme,
      floating: {
        ...theme$1.dropdownTheme.floating,
        base: tailwindMerge.twMerge(theme$1.dropdownTheme.floating.base, "mt-2 block"),
        content: tailwindMerge.twMerge(theme$1.dropdownTheme.floating.content, "text-gray-500 dark:text-gray-400"),
        style: {
          ...theme$1.dropdownTheme.floating.style,
          auto: tailwindMerge.twMerge(theme$1.dropdownTheme.floating.style.auto, "text-gray-500 dark:text-gray-400")
        }
      },
      inlineWrapper: tailwindMerge.twMerge(theme$1.dropdownTheme.inlineWrapper, "flex w-full items-center justify-between")
    }
  },
  dropdownToggle: {
    base: tailwindMerge.twMerge(theme.navbarTheme.link.base, theme.navbarTheme.link.active.off, "flex w-full items-center justify-between")
  }
});

exports.megaMenuTheme = megaMenuTheme;
//# sourceMappingURL=theme.cjs.map
