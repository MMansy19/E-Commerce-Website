'use client';
import { createContext, useContext } from 'react';

const DrawerContext = createContext(void 0);
function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext should be used within the DrawerContext provider!");
  }
  return context;
}

export { DrawerContext, useDrawerContext };
//# sourceMappingURL=DrawerContext.mjs.map
