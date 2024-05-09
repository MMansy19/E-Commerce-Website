'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TableBodyContext = require('./TableBodyContext.cjs');
var TableContext = require('./TableContext.cjs');

const TableBody = React.forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = TableContext.useTableContext();
    const theme = mergeDeep.mergeDeep(rootTheme.body, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(TableBodyContext.TableBodyContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntime.jsx("tbody", { className: tailwindMerge.twMerge(theme.base, className), ref, ...props, children }) });
  }
);
TableBody.displayName = "Table.Body";

exports.TableBody = TableBody;
//# sourceMappingURL=TableBody.cjs.map
