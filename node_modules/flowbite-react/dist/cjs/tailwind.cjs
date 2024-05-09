'use strict';

var flowbitePlugin = require('flowbite/plugin');

function content({ base = "./" } = {}) {
  const path = "node_modules/flowbite-react/dist/esm/**/*.mjs";
  return `${base}${path}`;
}
function plugin() {
  return flowbitePlugin;
}

exports.content = content;
exports.plugin = plugin;
//# sourceMappingURL=tailwind.cjs.map
