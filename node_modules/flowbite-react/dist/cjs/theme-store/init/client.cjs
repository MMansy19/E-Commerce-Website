'use client';
'use strict';

var index = require('../index.cjs');

function ThemeClientInit({ theme }) {
  index.setTheme(theme);
  return null;
}

exports.ThemeClientInit = ThemeClientInit;
//# sourceMappingURL=client.cjs.map
