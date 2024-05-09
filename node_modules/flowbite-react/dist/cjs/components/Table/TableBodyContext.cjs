'use client';
'use strict';

var React = require('react');

const TableBodyContext = React.createContext(void 0);
function useTableBodyContext() {
  const context = React.useContext(TableBodyContext);
  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }
  return context;
}

exports.TableBodyContext = TableBodyContext;
exports.useTableBodyContext = useTableBodyContext;
//# sourceMappingURL=TableBodyContext.cjs.map
