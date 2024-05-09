'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useListItem, useMergeRefs } from '@floating-ui/react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { ButtonBase } from '../Button/ButtonBase.mjs';
import { useDropdownContext } from './DropdownContext.mjs';

const DropdownItem = forwardRef(
  ({ children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }, forwardedRef) => {
    const { ref: listItemRef, index } = useListItem({ label: typeof children === "string" ? children : void 0 });
    const ref = useMergeRefs([forwardedRef, listItemRef]);
    const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
    const isActive = activeIndex === index;
    const theme = mergeDeep(rootTheme.floating.item, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsx("li", { role: "menuitem", className: theme.container, children: /* @__PURE__ */ jsxs(
      ButtonBase,
      {
        ref,
        className: twMerge(theme.base, className),
        ...theirProps,
        ...getItemProps({
          onClick: () => {
            onClick?.();
            dismissOnClick && handleSelect(null);
          }
        }),
        tabIndex: isActive ? 0 : -1,
        children: [
          Icon && /* @__PURE__ */ jsx(Icon, { className: theme.icon }),
          children
        ]
      }
    ) });
  }
);
DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
//# sourceMappingURL=DropdownItem.mjs.map
