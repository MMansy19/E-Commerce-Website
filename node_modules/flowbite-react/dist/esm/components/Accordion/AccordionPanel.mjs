'use client';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { AccordionPanelContext } from './AccordionPanelContext.mjs';

const AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = useState(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return /* @__PURE__ */ jsx(AccordionPanelContext.Provider, { value: provider, children });
};

export { AccordionPanel };
//# sourceMappingURL=AccordionPanel.mjs.map
