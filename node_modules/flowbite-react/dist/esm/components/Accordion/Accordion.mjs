'use client';
import { jsx } from 'react/jsx-runtime';
import { useState, useMemo, Children, cloneElement } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { AccordionContent } from './AccordionContent.mjs';
import { AccordionPanel } from './AccordionPanel.mjs';
import { AccordionTitle } from './AccordionTitle.mjs';

const AccordionComponent = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);
  const panels = useMemo(
    () => Children.map(
      children,
      (child, i) => cloneElement(child, {
        alwaysOpen,
        arrowIcon,
        flush,
        isOpen: isOpen === i,
        setOpen: () => setOpen(isOpen === i ? -1 : i)
      })
    ),
    [alwaysOpen, arrowIcon, children, flush, isOpen]
  );
  const theme = mergeDeep(getTheme().accordion.root, customTheme);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(theme.base, theme.flush[flush ? "on" : "off"], className),
      "data-testid": "flowbite-accordion",
      ...props,
      children: panels
    }
  );
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";
const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
});

export { Accordion };
//# sourceMappingURL=Accordion.mjs.map
