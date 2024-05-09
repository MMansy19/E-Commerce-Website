'use client';
import { createContext, useContext } from 'react';

const ToastContext = createContext(void 0);
function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

export { ToastContext, useToastContext };
//# sourceMappingURL=ToastContext.mjs.map
