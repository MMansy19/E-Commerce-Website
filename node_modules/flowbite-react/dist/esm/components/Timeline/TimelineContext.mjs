'use client';
import { createContext, useContext } from 'react';

const TimelineContext = createContext(void 0);
function useTimelineContext() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }
  return context;
}

export { TimelineContext, useTimelineContext };
//# sourceMappingURL=TimelineContext.mjs.map
