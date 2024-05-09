'use client';
'use strict';

var React = require('react');

function useIsMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
}

exports.useIsMounted = useIsMounted;
//# sourceMappingURL=use-is-mounted.cjs.map
