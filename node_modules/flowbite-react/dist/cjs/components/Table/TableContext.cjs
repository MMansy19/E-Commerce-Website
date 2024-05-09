'use client';
'use strict';

var React = require('react');

const TableContext = React.createContext(void 0);
function useTableContext() {
  const context = React.useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

exports.TableContext = TableContext;
exports.useTableContext = useTableContext;
//# sourceMappingURL=TableContext.cjs.map
