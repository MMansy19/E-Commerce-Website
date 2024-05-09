'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var hi = require('react-icons/hi');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var AccordionContent = require('./AccordionContent.cjs');
var AccordionPanel = require('./AccordionPanel.cjs');
var AccordionTitle = require('./AccordionTitle.cjs');

const AccordionComponent = ({
  alwaysOpen = false,
  arrowIcon = hi.HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = React.useState(collapseAll ? -1 : 0);
  const panels = React.useMemo(
    () => React.Children.map(
      children,
      (child, i) => React.cloneElement(child, {
        alwaysOpen,
        arrowIcon,
        flush,
        isOpen: isOpen === i,
        setOpen: () => setOpen(isOpen === i ? -1 : i)
      })
    ),
    [alwaysOpen, arrowIcon, children, flush, isOpen]
  );
  const theme = mergeDeep.mergeDeep(index.getTheme().accordion.root, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: tailwindMerge.twMerge(theme.base, theme.flush[flush ? "on" : "off"], className),
      "data-testid": "flowbite-accordion",
      ...props,
      children: panels
    }
  );
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.AccordionTitle.displayName = "Accordion.Title";
AccordionContent.AccordionContent.displayName = "Accordion.Content";
const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel.AccordionPanel,
  Title: AccordionTitle.AccordionTitle,
  Content: AccordionContent.AccordionContent
});

exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.cjs.map
