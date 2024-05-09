'use client';
import { jsx } from 'react/jsx-runtime';
import { Button } from '../Button/Button.mjs';
import '../Button/ButtonGroup.mjs';

const BannerCollapseButton = ({ children, ...props }) => {
  const onClick = (event) => {
    const collapseButton = event.target;
    const parentBanner = collapseButton.closest('[role="banner"]');
    parentBanner?.remove();
  };
  return /* @__PURE__ */ jsx(Button, { onClick, ...props, children });
};
BannerCollapseButton.displayName = "Banner.CollapseButton";

export { BannerCollapseButton };
//# sourceMappingURL=BannerCollapseButton.mjs.map
