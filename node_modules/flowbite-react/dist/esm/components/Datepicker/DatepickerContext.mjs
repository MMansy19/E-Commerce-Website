'use client';
import { createContext, useContext } from 'react';

const DatepickerContext = createContext(void 0);
function useDatePickerContext() {
  const context = useContext(DatepickerContext);
  if (!context) {
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  }
  return context;
}

export { DatepickerContext, useDatePickerContext };
//# sourceMappingURL=DatepickerContext.mjs.map
