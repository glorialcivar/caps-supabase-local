import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

import { PluginProps } from "../types/common.types";

// Pass `<string>` to specify that this plugin requires a string property.
export const withConfigPlist: ConfigPlugin<PluginProps> = (config, props) => {
  return withInfoPlist(config, config => {
    const { customDomains } = props;
    config.modResults.FirebaseDynamicLinksCustomDomains = customDomains;
    return config;
  });
};
