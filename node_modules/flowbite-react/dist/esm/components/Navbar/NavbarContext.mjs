'use client';
import { createContext, useContext } from 'react';

const NavbarContext = createContext(void 0);
function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

export { NavbarContext, useNavbarContext };
//# sourceMappingURL=NavbarContext.mjs.map
