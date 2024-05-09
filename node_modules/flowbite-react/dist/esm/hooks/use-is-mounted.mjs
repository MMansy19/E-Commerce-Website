'use client';
import { useState, useEffect } from 'react';

function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export { useIsMounted };
//# sourceMappingURL=use-is-mounted.mjs.map
