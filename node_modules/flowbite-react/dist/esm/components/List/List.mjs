import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { ListItem } from './ListItem.mjs';

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
  const theme = mergeDeep(getTheme().list, customTheme);
  const Component = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: twMerge(
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
ListItem.displayName = "List.Item";
const List = Object.assign(ListComponent, { Item: ListItem });

export { List };
//# sourceMappingURL=List.mjs.map
