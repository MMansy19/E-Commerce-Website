import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep.mjs';
import { omit } from '../../helpers/omit.mjs';
import { getTheme } from '../../theme-store/index.mjs';

const Card = (props) => {
  const { children, className, horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);
  const theme = mergeDeep(getTheme().card, customTheme);
  return /* @__PURE__ */ jsxs(
    Component,
    {
      "data-testid": "flowbite-card",
      href,
      className: twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? "on" : "off"],
        href && theme.root.href,
        className
      ),
      ...theirProps,
      children: [
        /* @__PURE__ */ jsx(Image, { ...props }),
        /* @__PURE__ */ jsx("div", { className: theme.root.children, children })
      ]
    }
  );
};
const Image = ({ theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        "data-testid": "flowbite-card-image",
        alt: props.imgAlt ?? "",
        src: props.imgSrc,
        className: twMerge(theme.img.base, theme.img.horizontal[props.horizontal ? "on" : "off"])
      }
    );
  }
  return null;
};
const removeCustomProps = omit([
  "renderImage",
  "imgSrc",
  "imgAlt",
  "children",
  "className",
  "horizontal",
  "href",
  "theme"
]);

export { Card };
//# sourceMappingURL=Card.mjs.map
