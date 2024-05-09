import { useFloating, autoUpdate, useInteractions, useClick, useHover, safePolygon, useDismiss, useRole } from '@floating-ui/react';
import { getPlacement, getMiddleware } from '../components/Floating/helpers.mjs';

const useBaseFLoating = ({
  open,
  arrowRef,
  placement = "top",
  setOpen
}) => {
  return useFloating({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef })
  });
};
const useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = []
}) => {
  return useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon()
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions
  ]);
};

export { useBaseFLoating, useFloatingInteractions };
//# sourceMappingURL=use-floating.mjs.map
