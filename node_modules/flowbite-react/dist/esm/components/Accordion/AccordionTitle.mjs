'use client';
import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { useAccordionContext } from './AccordionPanelContext.mjs';

const AccordionTitle = ({
  as: Heading = "h2",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  const theme = mergeDeep(getTheme().accordion.title, customTheme);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: twMerge(theme.base, theme.flush[flush ? "on" : "off"], theme.open[isOpen ? "on" : "off"], className),
      onClick,
      type: "button",
      ...props,
      children: [
        /* @__PURE__ */ jsx(Heading, { className: theme.heading, "data-testid": "flowbite-accordion-heading", children }),
        ArrowIcon && /* @__PURE__ */ jsx(
          ArrowIcon,
          {
            "aria-hidden": true,
            className: twMerge(theme.arrow.base, theme.arrow.open[isOpen ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
};

export { AccordionTitle };
//# sourceMappingURL=AccordionTitle.mjs.map
