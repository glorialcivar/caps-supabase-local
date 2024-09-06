// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, "../..");

const config = getDefaultConfig(__dirname);

config.watchFolders = [workspaceRoot];
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
config.transformer.assetPlugins = ["expo-asset/tools/hashAssetFiles"];
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules")
];
config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => ext !== "svg"
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = config;
