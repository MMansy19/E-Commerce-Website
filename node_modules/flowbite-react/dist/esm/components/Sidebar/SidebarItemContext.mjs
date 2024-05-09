'use client';
import { createContext, useContext } from 'react';

const SidebarItemContext = createContext(void 0);
function useSidebarItemContext() {
  const context = useContext(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

export { SidebarItemContext, useSidebarItemContext };
//# sourceMappingURL=SidebarItemContext.mjs.map
