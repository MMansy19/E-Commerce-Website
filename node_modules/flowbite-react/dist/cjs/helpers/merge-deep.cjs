'use strict';

var cloneDeep = require('./clone-deep.cjs');
var isObject = require('./is-object.cjs');

function mergeDeep(target, source) {
  if (isObject.isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep.cloneDeep({ ...target, ...source });
  }
  const output = { ...target, ...source };
  if (isObject.isObject(source) && isObject.isObject(target)) {
    for (const key in source) {
      if (isObject.isObject(source[key]) && key in target && isObject.isObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = isObject.isObject(source[key]) ? cloneDeep.cloneDeep(source[key]) : source[key];
      }
    }
  }
  return output;
}

exports.mergeDeep = mergeDeep;
//# sourceMappingURL=merge-deep.cjs.map
