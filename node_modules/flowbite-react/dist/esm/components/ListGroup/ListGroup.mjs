import { jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { getTheme } from '../../theme-store/index.mjs';
import { ListGroupItem } from './ListGroupItem.mjs';

const ListGroupComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme);
  return /* @__PURE__ */ jsx("ul", { className: twMerge(theme.root.base, className), ...props, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";
const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem
});

export { ListGroup };
//# sourceMappingURL=ListGroup.mjs.map
