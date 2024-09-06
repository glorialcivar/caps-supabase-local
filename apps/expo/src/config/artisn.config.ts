import { Providers } from "artisn-rn/analytics";

export const facebookProvider = new Providers.FacebookPixel({
  name: "FB"
});

export const googleProvider = new Providers.GoogleAnalytics({
  name: "GA"
});
