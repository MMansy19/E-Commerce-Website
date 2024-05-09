'use strict';

var isObject = require('./is-object.cjs');

function cloneDeep(source) {
  if (!isObject.isObject(source)) {
    return source;
  }
  const output = {};
  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }
  return output;
}

exports.cloneDeep = cloneDeep;
//# sourceMappingURL=clone-deep.cjs.map
