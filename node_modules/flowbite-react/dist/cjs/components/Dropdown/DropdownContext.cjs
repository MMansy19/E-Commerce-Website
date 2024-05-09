'use client';
'use strict';

var React = require('react');

const DropdownContext = React.createContext(void 0);
function useDropdownContext() {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }
  return context;
}

exports.DropdownContext = DropdownContext;
exports.useDropdownContext = useDropdownContext;
//# sourceMappingURL=DropdownContext.cjs.map
