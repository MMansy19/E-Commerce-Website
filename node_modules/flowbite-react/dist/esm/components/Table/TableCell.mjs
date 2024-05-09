'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTableBodyContext } from './TableBodyContext.mjs';

const TableCell = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = useTableBodyContext();
    const theme = mergeDeep(bodyTheme.cell, customTheme);
    return /* @__PURE__ */ jsx("td", { className: twMerge(theme.base, className), ref, ...props, children });
  }
);
TableCell.displayName = "Table.Cell";

export { TableCell };
//# sourceMappingURL=TableCell.mjs.map
