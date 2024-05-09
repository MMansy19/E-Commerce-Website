'use strict';

var createTheme = require('../../helpers/create-theme.cjs');

const radioTheme = createTheme.createTheme({
  root: {
    base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
  }
});

exports.radioTheme = radioTheme;
//# sourceMappingURL=theme.cjs.map
