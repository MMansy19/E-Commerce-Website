import { createTheme } from '../../helpers/create-theme.mjs';

const rangeSliderTheme = createTheme({
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

export { rangeSliderTheme };
//# sourceMappingURL=theme.mjs.map
