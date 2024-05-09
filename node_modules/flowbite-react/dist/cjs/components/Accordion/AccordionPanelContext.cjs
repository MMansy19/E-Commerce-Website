'use client';
'use strict';

var React = require('react');

const AccordionPanelContext = React.createContext(void 0);
function useAccordionContext() {
  const context = React.useContext(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

exports.AccordionPanelContext = AccordionPanelContext;
exports.useAccordionContext = useAccordionContext;
//# sourceMappingURL=AccordionPanelContext.cjs.map
