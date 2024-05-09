'use strict';

var react = require('@floating-ui/react');

const getMiddleware = ({
  arrowRef,
  placement
}) => {
  const middleware = [];
  middleware.push(react.offset(8));
  middleware.push(placement === "auto" ? react.autoPlacement() : react.flip());
  middleware.push(react.shift({ padding: 8 }));
  if (arrowRef?.current) {
    middleware.push(react.arrow({ element: arrowRef.current }));
  }
  return middleware;
};
const getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};
const getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[placement.split("-")[0]];
};

exports.getArrowPlacement = getArrowPlacement;
exports.getMiddleware = getMiddleware;
exports.getPlacement = getPlacement;
//# sourceMappingURL=helpers.cjs.map
