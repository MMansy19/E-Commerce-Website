'use client';
'use strict';

var React = require('react');

const SidebarContext = React.createContext(void 0);
function useSidebarContext() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

exports.SidebarContext = SidebarContext;
exports.useSidebarContext = useSidebarContext;
//# sourceMappingURL=SidebarContext.cjs.map
