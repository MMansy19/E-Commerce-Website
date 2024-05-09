'use client';
import { createContext, useContext } from 'react';

const ModalContext = createContext(void 0);
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

export { ModalContext, useModalContext };
//# sourceMappingURL=ModalContext.mjs.map
