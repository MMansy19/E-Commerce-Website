'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TableHeadContext = require('./TableHeadContext.cjs');

const TableHeadCell = React.forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: headTheme } = TableHeadContext.useTableHeadContext();
    const theme = mergeDeep.mergeDeep(headTheme.cell, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx("th", { className: tailwindMerge.twMerge(theme.base, className), ref, ...props, children });
  }
);
TableHeadCell.displayName = "Table.HeadCell";

exports.TableHeadCell = TableHeadCell;
//# sourceMappingURL=TableHeadCell.cjs.map
