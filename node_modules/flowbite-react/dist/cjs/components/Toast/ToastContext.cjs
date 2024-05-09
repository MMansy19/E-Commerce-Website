'use client';
'use strict';

var React = require('react');

const ToastContext = React.createContext(void 0);
function useToastContext() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

exports.ToastContext = ToastContext;
exports.useToastContext = useToastContext;
//# sourceMappingURL=ToastContext.cjs.map
