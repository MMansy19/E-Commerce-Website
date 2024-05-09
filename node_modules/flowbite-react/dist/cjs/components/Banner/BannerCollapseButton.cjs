'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Button = require('../Button/Button.cjs');
require('../Button/ButtonGroup.cjs');

const BannerCollapseButton = ({ children, ...props }) => {
  const onClick = (event) => {
    const collapseButton = event.target;
    const parentBanner = collapseButton.closest('[role="banner"]');
    parentBanner?.remove();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Button.Button, { onClick, ...props, children });
};
BannerCollapseButton.displayName = "Banner.CollapseButton";

exports.BannerCollapseButton = BannerCollapseButton;
//# sourceMappingURL=BannerCollapseButton.cjs.map
