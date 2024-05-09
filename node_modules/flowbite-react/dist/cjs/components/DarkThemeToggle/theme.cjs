'use strict';

var createTheme = require('../../helpers/create-theme.cjs');

const darkThemeToggleTheme = createTheme.createTheme({
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
});

exports.darkThemeToggleTheme = darkThemeToggleTheme;
//# sourceMappingURL=theme.cjs.map
