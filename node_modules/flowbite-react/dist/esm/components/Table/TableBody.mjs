'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { TableBodyContext } from './TableBodyContext.mjs';
import { useTableContext } from './TableContext.mjs';

const TableBody = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme = mergeDeep(rootTheme.body, customTheme);
    return /* @__PURE__ */ jsx(TableBodyContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsx("tbody", { className: twMerge(theme.base, className), ref, ...props, children }) });
  }
);
TableBody.displayName = "Table.Body";

export { TableBody };
//# sourceMappingURL=TableBody.mjs.map
