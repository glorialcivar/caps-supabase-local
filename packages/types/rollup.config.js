import { declarationsConfig } from "../../rollup.config";

const config = [
  {
    ...declarationsConfig,
    external: [...declarationsConfig.external, "@artisan-commerce/types"]
  }
];

export default config;
