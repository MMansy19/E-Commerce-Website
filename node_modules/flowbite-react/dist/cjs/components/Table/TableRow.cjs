'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TableContext = require('./TableContext.cjs');

const TableRow = React.forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme, hoverable, striped } = TableContext.useTableContext();
    const theme = mergeDeep.mergeDeep(rootTheme.row, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "tr",
      {
        ref,
        "data-testid": "table-row-element",
        className: tailwindMerge.twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className),
        ...props,
        children
      }
    );
  }
);
TableRow.displayName = "Table.Row";

exports.TableRow = TableRow;
//# sourceMappingURL=TableRow.cjs.map
