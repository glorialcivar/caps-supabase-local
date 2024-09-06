import { bundleConfig, declarationsConfig } from "../../rollup.config";

import packageJSON from "./package.json";

const baseConfig = bundleConfig(packageJSON);

// exclude the first item, in this case, nodeResolve
const [, ...plugins] = baseConfig.plugins;

const config = [
  {
    ...baseConfig,
    plugins: [...plugins]
  },
  declarationsConfig
];

export default config;
