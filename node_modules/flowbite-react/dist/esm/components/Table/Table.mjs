'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { TableBody } from './TableBody.mjs';
import { TableCell } from './TableCell.mjs';
import { TableContext } from './TableContext.mjs';
import { TableHead } from './TableHead.mjs';
import { TableHeadCell } from './TableHeadCell.mjs';
import { TableRow } from './TableRow.mjs';

const TableComponent = forwardRef(
  ({ children, className, striped, hoverable, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().table, customTheme);
    return /* @__PURE__ */ jsx("div", { "data-testid": "table-element", className: twMerge(theme.root.wrapper), children: /* @__PURE__ */ jsxs(TableContext.Provider, { value: { theme, striped, hoverable }, children: [
      /* @__PURE__ */ jsx("div", { className: twMerge(theme.root.shadow, className) }),
      /* @__PURE__ */ jsx("table", { className: twMerge(theme.root.base, className), ...props, ref, children })
    ] }) });
  }
);
TableComponent.displayName = "Table";
const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell
});

export { Table };
//# sourceMappingURL=Table.mjs.map
