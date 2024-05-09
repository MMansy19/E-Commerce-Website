'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var TableContext = require('./TableContext.cjs');
var TableHeadContext = require('./TableHeadContext.cjs');

const TableHead = React.forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = TableContext.useTableContext();
    const theme = mergeDeep.mergeDeep(rootTheme.head, customTheme);
    return /* @__PURE__ */ jsxRuntime.jsx(TableHeadContext.TableHeadContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntime.jsx("thead", { className: tailwindMerge.twMerge(theme.base, className), ref, ...props, children: /* @__PURE__ */ jsxRuntime.jsx("tr", { children }) }) });
  }
);
TableHead.displayName = "Table.Head";

exports.TableHead = TableHead;
//# sourceMappingURL=TableHead.cjs.map
