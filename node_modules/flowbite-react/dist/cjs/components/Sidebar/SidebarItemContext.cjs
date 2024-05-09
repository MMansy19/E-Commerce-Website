'use client';
'use strict';

var React = require('react');

const SidebarItemContext = React.createContext(void 0);
function useSidebarItemContext() {
  const context = React.useContext(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

exports.SidebarItemContext = SidebarItemContext;
exports.useSidebarItemContext = useSidebarItemContext;
//# sourceMappingURL=SidebarItemContext.cjs.map
