'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tailwindMerge = require('tailwind-merge');
var mergeDeep = require('../../helpers/merge-deep.cjs');
var omit = require('../../helpers/omit.cjs');
var index = require('../../theme-store/index.cjs');

const Card = (props) => {
  const { children, className, horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);
  const theme = mergeDeep.mergeDeep(index.getTheme().card, customTheme);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Component,
    {
      "data-testid": "flowbite-card",
      href,
      className: tailwindMerge.twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? "on" : "off"],
        href && theme.root.href,
        className
      ),
      ...theirProps,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Image, { ...props }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: theme.root.children, children })
      ]
    }
  );
};
const Image = ({ theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep.mergeDeep(index.getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        "data-testid": "flowbite-card-image",
        alt: props.imgAlt ?? "",
        src: props.imgSrc,
        className: tailwindMerge.twMerge(theme.img.base, theme.img.horizontal[props.horizontal ? "on" : "off"])
      }
    );
  }
  return null;
};
const removeCustomProps = omit.omit([
  "renderImage",
  "imgSrc",
  "imgAlt",
  "children",
  "className",
  "horizontal",
  "href",
  "theme"
]);

exports.Card = Card;
//# sourceMappingURL=Card.cjs.map
