import flowbitePlugin from 'flowbite/plugin';

function content({ base = "./" } = {}) {
  const path = "node_modules/flowbite-react/dist/esm/**/*.mjs";
  return `${base}${path}`;
}
function plugin() {
  return flowbitePlugin;
}

export { content, plugin };
//# sourceMappingURL=tailwind.mjs.map
