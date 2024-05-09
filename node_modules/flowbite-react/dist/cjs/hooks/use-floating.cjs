'use strict';

var react = require('@floating-ui/react');
var helpers = require('../components/Floating/helpers.cjs');

const useBaseFLoating = ({
  open,
  arrowRef,
  placement = "top",
  setOpen
}) => {
  return react.useFloating({
    placement: helpers.getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: react.autoUpdate,
    middleware: helpers.getMiddleware({ placement, arrowRef })
  });
};
const useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = []
}) => {
  return react.useInteractions([
    react.useClick(context, { enabled: trigger === "click" }),
    react.useHover(context, {
      enabled: trigger === "hover",
      handleClose: react.safePolygon()
    }),
    react.useDismiss(context),
    react.useRole(context, { role }),
    ...interactions
  ]);
};

exports.useBaseFLoating = useBaseFLoating;
exports.useFloatingInteractions = useFloatingInteractions;
//# sourceMappingURL=use-floating.cjs.map
