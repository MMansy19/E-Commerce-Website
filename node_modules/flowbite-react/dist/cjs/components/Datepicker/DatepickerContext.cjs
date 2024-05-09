'use client';
'use strict';

var React = require('react');

const DatepickerContext = React.createContext(void 0);
function useDatePickerContext() {
  const context = React.useContext(DatepickerContext);
  if (!context) {
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  }
  return context;
}

exports.DatepickerContext = DatepickerContext;
exports.useDatePickerContext = useDatePickerContext;
//# sourceMappingURL=DatepickerContext.cjs.map
