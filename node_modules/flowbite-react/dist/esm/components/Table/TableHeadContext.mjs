'use client';
import { createContext, useContext } from 'react';

const TableHeadContext = createContext(void 0);
function useTableHeadContext() {
  const context = useContext(TableHeadContext);
  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }
  return context;
}

export { TableHeadContext, useTableHeadContext };
//# sourceMappingURL=TableHeadContext.mjs.map
