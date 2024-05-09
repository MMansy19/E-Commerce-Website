'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var TableBody = require('./TableBody.cjs');
var TableCell = require('./TableCell.cjs');
var TableContext = require('./TableContext.cjs');
var TableHead = require('./TableHead.cjs');
var TableHeadCell = require('./TableHeadCell.cjs');
var TableRow = require('./TableRow.cjs');

const TableComponent = React.forwardRef(
  ({ children, className, striped, hoverable, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep.mergeDeep(index.getTheme().table, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "table-element", className: tailwindMerge.twMerge(theme.root.wrapper), children: /* @__PURE__ */ jsxRuntime.jsxs(TableContext.TableContext.Provider, { value: { theme, striped, hoverable }, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge(theme.root.shadow, className) }),
      /* @__PURE__ */ jsxRuntime.jsx("table", { className: tailwindMerge.twMerge(theme.root.base, className), ...props, ref, children })
    ] }) });
  }
);
TableComponent.displayName = "Table";
const Table = Object.assign(TableComponent, {
  Head: TableHead.TableHead,
  Body: TableBody.TableBody,
  Row: TableRow.TableRow,
  Cell: TableCell.TableCell,
  HeadCell: TableHeadCell.TableHeadCell
});

exports.Table = Table;
//# sourceMappingURL=Table.cjs.map
