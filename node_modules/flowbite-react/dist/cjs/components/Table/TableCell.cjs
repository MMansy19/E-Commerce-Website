'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TableBodyContext = require('./TableBodyContext.cjs');

const TableCell = React.forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = TableBodyContext.useTableBodyContext();
    const theme = mergeDeep.mergeDeep(bodyTheme.cell, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx("td", { className: tailwindMerge.twMerge(theme.base, className), ref, ...props, children });
  }
);
TableCell.displayName = "Table.Cell";

exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.cjs.map
