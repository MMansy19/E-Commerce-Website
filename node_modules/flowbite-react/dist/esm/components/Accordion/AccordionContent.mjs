'use client';
import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { useAccordionContext } from './AccordionPanelContext.mjs';

const AccordionContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();
  const theme = mergeDeep(getTheme().accordion.content, customTheme);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(theme.base, className),
      "data-testid": "flowbite-accordion-content",
      hidden: !isOpen,
      ...props,
      children
    }
  );
};

export { AccordionContent };
//# sourceMappingURL=AccordionContent.mjs.map
