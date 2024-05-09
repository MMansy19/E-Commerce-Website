'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var AccordionPanelContext = require('./AccordionPanelContext.cjs');

const AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = React.useState(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPanelContext.AccordionPanelContext.Provider, { value: provider, children });
};

exports.AccordionPanel = AccordionPanel;
//# sourceMappingURL=AccordionPanel.cjs.map
