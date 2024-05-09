'use client';
'use strict';

var React = require('react');

const TableHeadContext = React.createContext(void 0);
function useTableHeadContext() {
  const context = React.useContext(TableHeadContext);
  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }
  return context;
}

exports.TableHeadContext = TableHeadContext;
exports.useTableHeadContext = useTableHeadContext;
//# sourceMappingURL=TableHeadContext.cjs.map
