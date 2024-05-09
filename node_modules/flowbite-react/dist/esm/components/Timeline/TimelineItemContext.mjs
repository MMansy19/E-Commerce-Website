'use client';
import { createContext, useContext } from 'react';

const TimelineItemContext = createContext(void 0);
function useTimelineItemContext() {
  const context = useContext(TimelineItemContext);
  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }
  return context;
}

export { TimelineItemContext, useTimelineItemContext };
//# sourceMappingURL=TimelineItemContext.mjs.map
