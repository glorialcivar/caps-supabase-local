const config = require("../../jest.base.config");

const packageName = require("./package.json").name.split("@simple/").pop();

module.exports = {
  ...config,
  roots: [`<rootDir>/packages/${packageName}`],
  name: packageName,
  displayName: packageName
};
