'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@floating-ui/react');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var ButtonBase = require('../Button/ButtonBase.cjs');
var DropdownContext = require('./DropdownContext.cjs');

const DropdownItem = React.forwardRef(
  ({ children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }, forwardedRef) => {
    const { ref: listItemRef, index } = react.useListItem({ label: typeof children === "string" ? children : void 0 });
    const ref = react.useMergeRefs([forwardedRef, listItemRef]);
    const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = DropdownContext.useDropdownContext();
    const isActive = activeIndex === index;
    const theme = mergeDeep.mergeDeep(rootTheme.floating.item, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsxRuntime.jsx("li", { role: "menuitem", className: theme.container, children: /* @__PURE__ */ jsxRuntime.jsxs(
      ButtonBase.ButtonBase,
      {
        ref,
        className: tailwindMerge.twMerge(theme.base, className),
        ...theirProps,
        ...getItemProps({
          onClick: () => {
            onClick?.();
            dismissOnClick && handleSelect(null);
          }
        }),
        tabIndex: isActive ? 0 : -1,
        children: [
          Icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: theme.icon }),
          children
        ]
      }
    ) });
  }
);
DropdownItem.displayName = "DropdownItem";

exports.DropdownItem = DropdownItem;
//# sourceMappingURL=DropdownItem.cjs.map
