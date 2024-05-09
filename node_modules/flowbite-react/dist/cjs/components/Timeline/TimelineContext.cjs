'use client';
'use strict';

var React = require('react');

const TimelineContext = React.createContext(void 0);
function useTimelineContext() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }
  return context;
}

exports.TimelineContext = TimelineContext;
exports.useTimelineContext = useTimelineContext;
//# sourceMappingURL=TimelineContext.cjs.map
