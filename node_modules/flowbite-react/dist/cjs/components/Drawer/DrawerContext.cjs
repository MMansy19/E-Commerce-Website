'use client';
'use strict';

var React = require('react');

const DrawerContext = React.createContext(void 0);
function useDrawerContext() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext should be used within the DrawerContext provider!");
  }
  return context;
}

exports.DrawerContext = DrawerContext;
exports.useDrawerContext = useDrawerContext;
//# sourceMappingURL=DrawerContext.cjs.map
