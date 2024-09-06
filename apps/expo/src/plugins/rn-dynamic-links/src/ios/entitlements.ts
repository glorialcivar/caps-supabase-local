import { ConfigPlugin, withEntitlementsPlist } from "@expo/config-plugins";

import { PluginProps } from "../types/common.types";

// Pass `<string>` to specify that this plugin requires a string property.
export const withConfigEntitlementsPlist: ConfigPlugin<PluginProps> = (
  config,
  props
) => {
  return withEntitlementsPlist(config, config => {
    const { customDomains } = props;
    config.modResults["com.apple.developer.associated-domains"] = customDomains;
    return config;
  });
};
