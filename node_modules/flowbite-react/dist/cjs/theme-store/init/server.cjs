'use strict';

var index = require('../index.cjs');

function ThemeServerInit({ theme }) {
  index.setTheme(theme);
  return null;
}

exports.ThemeServerInit = ThemeServerInit;
//# sourceMappingURL=server.cjs.map
