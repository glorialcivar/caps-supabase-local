import reactSvg from "rollup-plugin-react-svg";

import { bundleConfig, declarationsConfig } from "../../rollup.config";

import packageJSON from "./package.json";

const baseConfig = bundleConfig(packageJSON);

const config = [
  {
    ...baseConfig,
    plugins: [...baseConfig.plugins, reactSvg()]
  },
  declarationsConfig
];

export default config;
