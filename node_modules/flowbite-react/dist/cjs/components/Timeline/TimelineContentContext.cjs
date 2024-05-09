'use client';
'use strict';

var React = require('react');

const TimelineContentContext = React.createContext(void 0);
function useTimelineContentContext() {
  const context = React.useContext(TimelineContentContext);
  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }
  return context;
}

exports.TimelineContentContext = TimelineContentContext;
exports.useTimelineContentContext = useTimelineContentContext;
//# sourceMappingURL=TimelineContentContext.cjs.map
