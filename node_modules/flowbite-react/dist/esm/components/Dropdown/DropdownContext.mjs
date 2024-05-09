'use client';
import { createContext, useContext } from 'react';

const DropdownContext = createContext(void 0);
function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }
  return context;
}

export { DropdownContext, useDropdownContext };
//# sourceMappingURL=DropdownContext.mjs.map
