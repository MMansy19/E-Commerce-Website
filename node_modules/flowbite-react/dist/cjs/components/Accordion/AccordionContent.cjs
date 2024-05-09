'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var AccordionPanelContext = require('./AccordionPanelContext.cjs');

const AccordionContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = AccordionPanelContext.useAccordionContext();
  const theme = mergeDeep.mergeDeep(index.getTheme().accordion.content, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: tailwindMerge.twMerge(theme.base, className),
      "data-testid": "flowbite-accordion-content",
      hidden: !isOpen,
      ...props,
      children
    }
  );
};

exports.AccordionContent = AccordionContent;
//# sourceMappingURL=AccordionContent.cjs.map
