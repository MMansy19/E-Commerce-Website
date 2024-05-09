'use client';
'use strict';

var React = require('react');

const RatingContext = React.createContext(void 0);
function useRatingContext() {
  const context = React.useContext(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

exports.RatingContext = RatingContext;
exports.useRatingContext = useRatingContext;
//# sourceMappingURL=RatingContext.cjs.map
