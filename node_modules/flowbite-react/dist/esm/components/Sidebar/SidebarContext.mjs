'use client';
import { createContext, useContext } from 'react';

const SidebarContext = createContext(void 0);
function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

export { SidebarContext, useSidebarContext };
//# sourceMappingURL=SidebarContext.mjs.map
