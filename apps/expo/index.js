import "expo-dev-client";
import { registerRootComponent } from "expo";

import App from "./src/containers/App/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
