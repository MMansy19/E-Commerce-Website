'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { useTableContext } from './TableContext.mjs';
import { TableHeadContext } from './TableHeadContext.mjs';

const TableHead = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme = mergeDeep(rootTheme.head, customTheme);
    return /* @__PURE__ */ jsx(TableHeadContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsx("thead", { className: twMerge(theme.base, className), ref, ...props, children: /* @__PURE__ */ jsx("tr", { children }) }) });
  }
);
TableHead.displayName = "Table.Head";

export { TableHead };
//# sourceMappingURL=TableHead.mjs.map
