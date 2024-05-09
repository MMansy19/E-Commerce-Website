'use strict';

var createTheme = require('../../helpers/create-theme.cjs');

const rangeSliderTheme = createTheme.createTheme({
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
      sizes: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    }
  }
});

exports.rangeSliderTheme = rangeSliderTheme;
//# sourceMappingURL=theme.cjs.map
