'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var index = require('../../theme-store/index.cjs');
var ListItem = require('./ListItem.cjs');

const ListComponent = ({
  children,
  className,
  unstyled,
  nested,
  ordered,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().list, customTheme);
  const Component = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      className: tailwindMerge.twMerge(
        theme.root.base,
        theme.root.ordered[ordered ? "on" : "off"],
        unstyled && theme.root.unstyled,
        nested && theme.root.nested,
        horizontal && theme.root.horizontal,
        className
      ),
      ...props,
      children
    }
  );
};
ListComponent.displayName = "List";
ListItem.ListItem.displayName = "List.Item";
const List = Object.assign(ListComponent, { Item: ListItem.ListItem });

exports.List = List;
//# sourceMappingURL=List.cjs.map
