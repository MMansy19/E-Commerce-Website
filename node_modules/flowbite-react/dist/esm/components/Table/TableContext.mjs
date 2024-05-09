'use client';
import { createContext, useContext } from 'react';

const TableContext = createContext(void 0);
function useTableContext() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

export { TableContext, useTableContext };
//# sourceMappingURL=TableContext.mjs.map
