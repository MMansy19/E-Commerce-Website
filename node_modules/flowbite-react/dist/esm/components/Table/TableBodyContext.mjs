'use client';
import { createContext, useContext } from 'react';

const TableBodyContext = createContext(void 0);
function useTableBodyContext() {
  const context = useContext(TableBodyContext);
  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }
  return context;
}

export { TableBodyContext, useTableBodyContext };
//# sourceMappingURL=TableBodyContext.mjs.map
