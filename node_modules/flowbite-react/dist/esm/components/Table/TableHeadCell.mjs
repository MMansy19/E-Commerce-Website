'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTableHeadContext } from './TableHeadContext.mjs';

const TableHeadCell = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: headTheme } = useTableHeadContext();
    const theme = mergeDeep(headTheme.cell, customTheme);
    return /* @__PURE__ */ jsx("th", { className: twMerge(theme.base, className), ref, ...props, children });
  }
);
TableHeadCell.displayName = "Table.HeadCell";

export { TableHeadCell };
//# sourceMappingURL=TableHeadCell.mjs.map
