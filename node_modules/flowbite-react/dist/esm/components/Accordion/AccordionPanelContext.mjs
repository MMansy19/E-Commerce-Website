'use client';
import { createContext, useContext } from 'react';

const AccordionPanelContext = createContext(void 0);
function useAccordionContext() {
  const context = useContext(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

export { AccordionPanelContext, useAccordionContext };
//# sourceMappingURL=AccordionPanelContext.mjs.map
