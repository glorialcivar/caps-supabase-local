const config = require("../../jest.base.config");

const packageName = require("./package.json").name.split("@simple/").pop();

module.exports = {
  ...config,
  roots: [`<rootDir>/packages/${packageName}`],
  name: packageName,
  displayName: packageName,
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: [
    ...config.setupFilesAfterEnv,
    `<rootDir>/packages/${packageName}/src/setupTests.tsx`
  ],
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": `<rootDir>/packages/${packageName}/jest/fileTransform.js`,
    "^.+\\.[tj]sx?$": "babel-jest",
    ...config.transform
  }
};
