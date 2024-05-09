'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var AccordionPanelContext = require('./AccordionPanelContext.cjs');

const AccordionTitle = ({
  as: Heading = "h2",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = AccordionPanelContext.useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  const theme = mergeDeep.mergeDeep(index.getTheme().accordion.title, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      className: tailwindMerge.twMerge(theme.base, theme.flush[flush ? "on" : "off"], theme.open[isOpen ? "on" : "off"], className),
      onClick,
      type: "button",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Heading, { className: theme.heading, "data-testid": "flowbite-accordion-heading", children }),
        ArrowIcon && /* @__PURE__ */ jsxRuntime.jsx(
          ArrowIcon,
          {
            "aria-hidden": true,
            className: tailwindMerge.twMerge(theme.arrow.base, theme.arrow.open[isOpen ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
};

exports.AccordionTitle = AccordionTitle;
//# sourceMappingURL=AccordionTitle.cjs.map
