'use client';
'use strict';

var React = require('react');

const TimelineItemContext = React.createContext(void 0);
function useTimelineItemContext() {
  const context = React.useContext(TimelineItemContext);
  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }
  return context;
}

exports.TimelineItemContext = TimelineItemContext;
exports.useTimelineItemContext = useTimelineItemContext;
//# sourceMappingURL=TimelineItemContext.cjs.map
