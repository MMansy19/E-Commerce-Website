import { jsx } from 'react/jsx-runtime';
import { BannerCollapseButton } from './BannerCollapseButton.mjs';

const BannerComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...props, children });
};
BannerComponent.displayName = "Banner";
const Banner = Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton
});

export { Banner };
//# sourceMappingURL=Banner.mjs.map
