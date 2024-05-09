'use strict';

var jsxRuntime = require('react/jsx-runtime');
var BannerCollapseButton = require('./BannerCollapseButton.cjs');

const BannerComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...props, children });
};
BannerComponent.displayName = "Banner";
const Banner = Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton.BannerCollapseButton
});

exports.Banner = Banner;
//# sourceMappingURL=Banner.cjs.map
