import { ConfigPlugin } from "@expo/config-plugins";
import { withPlugins, createRunOncePlugin } from "@expo/config-plugins";

import { withConfigPlist, withConfigEntitlementsPlist } from "./ios";
import { PluginProps } from "./types/common.types";

const withRNDynamicLinks: ConfigPlugin<PluginProps> = (config, props) => {
  return withPlugins(config, [
    // iOS
    [withConfigPlist, props],
    [withConfigEntitlementsPlist, props]
  ]);
};

const pak = require("@react-native-firebase/dynamic-links/package.json");
export default createRunOncePlugin(withRNDynamicLinks, pak.name, pak.version);
