'use client';
import { createContext, useContext } from 'react';

const TimelineContentContext = createContext(void 0);
function useTimelineContentContext() {
  const context = useContext(TimelineContentContext);
  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }
  return context;
}

export { TimelineContentContext, useTimelineContentContext };
//# sourceMappingURL=TimelineContentContext.mjs.map
