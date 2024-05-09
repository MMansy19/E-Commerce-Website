'use client';
'use strict';

var React = require('react');

const NavbarContext = React.createContext(void 0);
function useNavbarContext() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

exports.NavbarContext = NavbarContext;
exports.useNavbarContext = useNavbarContext;
//# sourceMappingURL=NavbarContext.cjs.map
