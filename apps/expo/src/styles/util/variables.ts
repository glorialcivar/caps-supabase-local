import { lighten } from "polished";
import { Dimensions } from "react-native";

// Primary color
const primary = "hsla(357, 96%, 65%, 1)";

const $palette = {
  h0s0l0: "hsla(0, 0%, 0%, 1)",
  h0s0l100: "hsla(0, 0%, 100%, 1)",
  primary,
  primaryLight: lighten(0.3, primary),
  black: "$palette.h0s0l0",
  white: "$palette.h0s0l100",
  background: "$palette.h0s0l0"
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const $sizes = {
  minWidth: screenWidth,
  maxWidth: screenWidth,
  minHeight: screenHeight
};

const $fonts = {
  primary: "SFProDisplay-Regular",
  primaryBold: "SFProDisplay-Bold"
};

const variables = { $palette, $sizes, $fonts };

export default variables;
