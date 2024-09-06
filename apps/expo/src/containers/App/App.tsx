import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import * as Font from "expo-font";
import * as Localization from "expo-localization";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { LogBox, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
import "react-native-gesture-handler";
// TODO: activar
// import "config/services.config";
import "dayjs/locale/en";
import "dayjs/locale/es";

import { AppProps as Props } from "./App.types";
import Layout from "components/global/Layout/Layout";
import Providers from "containers/Providers/Providers";
import Navigator from "navigation/Navigator";
import { defaultTheme } from "stores/theme/theme.store.helpers";
import { fonts } from "utils/fonts.utils";
import "i18n/i18n";
// import CONSTANTS from "config/constants";

// const { WEB_CLIENT_ID } = CONSTANTS;

// This line silences the warning "Setting a timer for a long period of time..."
// The warning mainly appears due to setTimeouts in services
LogBox.ignoreLogs(["Setting a timer", "SplashScreen.show"]);

// GoogleSignin.configure({
//   webClientId: WEB_CLIENT_ID
// });

dayjs.extend(isoWeek);
EStyleSheet.build(defaultTheme);

const App: React.FC<Props> = props => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts
        await Font.loadAsync(fonts);
        // Artificially delay for two seconds to simulate a slow loading
        // experience.
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    const normalizedLocale = Localization.locale.replace("_", "-");
    const sanitizedLocale = normalizedLocale.replace(/-.+/, "");
    dayjs.locale(sanitizedLocale);
  }, []);

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Providers>
        <Layout>
          <Navigator />
        </Layout>
      </Providers>
    </View>
  );
};

export default App;
