import { declarationsConfig } from "../../rollup.config.js";

const config = [
  {
    ...declarationsConfig,
    external: [...declarationsConfig.external]
  }
];

export default config;
