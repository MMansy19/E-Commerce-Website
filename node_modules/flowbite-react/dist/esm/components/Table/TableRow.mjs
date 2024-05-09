'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTableContext } from './TableContext.mjs';

const TableRow = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme, hoverable, striped } = useTableContext();
    const theme = mergeDeep(rootTheme.row, customTheme);
    return /* @__PURE__ */ jsx(
      "tr",
      {
        ref,
        "data-testid": "table-row-element",
        className: twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className),
        ...props,
        children
      }
    );
  }
);
TableRow.displayName = "Table.Row";

export { TableRow };
//# sourceMappingURL=TableRow.mjs.map
