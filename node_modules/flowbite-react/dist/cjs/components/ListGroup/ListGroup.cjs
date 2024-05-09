'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var ListGroupItem = require('./ListGroupItem.cjs');

const ListGroupComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().listGroup, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { className: tailwindMerge.twMerge(theme.root.base, className), ...props, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.ListGroupItem.displayName = "ListGroup.Item";
const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem.ListGroupItem
});

exports.ListGroup = ListGroup;
//# sourceMappingURL=ListGroup.cjs.map
