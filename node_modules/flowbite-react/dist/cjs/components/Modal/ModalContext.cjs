'use client';
'use strict';

var React = require('react');

const ModalContext = React.createContext(void 0);
function useModalContext() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

exports.ModalContext = ModalContext;
exports.useModalContext = useModalContext;
//# sourceMappingURL=ModalContext.cjs.map
