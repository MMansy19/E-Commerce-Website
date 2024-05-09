'use client';
import { createContext, useContext } from 'react';

const RatingContext = createContext(void 0);
function useRatingContext() {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

export { RatingContext, useRatingContext };
//# sourceMappingURL=RatingContext.mjs.map
