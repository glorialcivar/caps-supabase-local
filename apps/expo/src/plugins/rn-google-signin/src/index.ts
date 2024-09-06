import { ConfigPlugin } from "@expo/config-plugins";
import { withPlugins, createRunOncePlugin } from "@expo/config-plugins";

import { withConfigPlist, withGoogleSignInSDKAppDelegate } from "./ios";
import { PluginProps } from "./types/common.types";

const withRNGoogleSignInSDK: ConfigPlugin<PluginProps> = (config, props) => {
  return withPlugins(config, [
    // iOS
    [withConfigPlist, props],
    withGoogleSignInSDKAppDelegate
  ]);
};

const pak = require("@react-native-google-signin/google-signin/package.json");
export default createRunOncePlugin(
  withRNGoogleSignInSDK,
  pak.name,
  pak.version
);
