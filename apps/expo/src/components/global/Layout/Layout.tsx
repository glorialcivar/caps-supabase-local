import auth from "@react-native-firebase/auth";
import { lockAsync, OrientationLock } from "expo-screen-orientation";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import styles from "./Layout.styles";
import { LayoutProps as Props } from "./Layout.types";
import useSetupArtisan from "hooks/artisan/useSetupArtisan";
import { useDynamicLinkListener } from "hooks/useDynamicLinkListener";
import { useAuthStore } from "stores/auth/auth.store";

const Layout: React.FC<Props> = props => {
  const { children } = props;
  const uid = useAuthStore(state => state.uid);
  const shoppingCartDeleted = useRef(false);
  useSetupArtisan();
  useDynamicLinkListener();

  // Lock screen in portrait
  useEffect(() => {
    lockAsync(OrientationLock.PORTRAIT_UP);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await auth().currentUser?.getIdToken(true);
        shoppingCartDeleted.current = true;
      } catch (e) {
        console.warn(e.message);
      }
    })();
  }, [uid]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor={EStyleSheet.value("$palette.background")}
          barStyle="light-content"
        />
        {children}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Layout;
