'use strict';

var createTheme = require('../../helpers/create-theme.cjs');

const helperTextTheme = createTheme.createTheme({
  root: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
});

exports.helperTextTheme = helperTextTheme;
//# sourceMappingURL=theme.cjs.map
