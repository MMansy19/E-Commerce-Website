'use strict';

const omit = (keys) => (obj) => {
  const result = {};
  for (const key in obj) {
    if (keys.includes(key)) {
      continue;
    }
    result[key] = obj[key];
  }
  return result;
};

exports.omit = omit;
//# sourceMappingURL=omit.cjs.map
