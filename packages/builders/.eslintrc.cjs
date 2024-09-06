const path = require("path");

module.exports = {
  extends: ["../../.eslintrc.cjs", "react-app"],
  rules: {},
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parserOptions: {
        project: "./tsconfig.json"
      },
      rules: {},
      settings: {
        "import/resolver": {
          node: {
            paths: [path.resolve(__dirname, "src")]
          },
          typescript: {
            project: path.resolve(__dirname, "tsconfig.json")
          }
        }
      }
    }
  ]
};
