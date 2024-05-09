'use strict';

var createTheme = require('../../helpers/create-theme.cjs');

const blockquoteTheme = createTheme.createTheme({
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white"
  }
});

exports.blockquoteTheme = blockquoteTheme;
//# sourceMappingURL=theme.cjs.map
