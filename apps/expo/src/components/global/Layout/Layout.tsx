import auth from "@react-native-firebase/auth";
// import { deleteShoppingCart } from "artisn-rn/shopping-cart";
import { lockAsync, OrientationLock } from "expo-screen-orientation";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useQueryClient } from "@tanstack/react-query";

import styles from "./Layout.styles";
import { LayoutProps as Props } from "./Layout.types";
import useSetupArtisan from "hooks/artisan/useSetupArtisan";
import { useDynamicLinkListener } from "hooks/useDynamicLinkListener";
// import useListeners from "hooks/useListeners";
import { useAuthStore } from "stores/auth/auth.store";

const Layout: React.FC<Props> = props => {
  const { children } = props;
  // const queryClient = getState().queryClient;
  // const isAnonymous = useAuthStore(state => state.isAnonymous);
  const uid = useAuthStore(state => state.uid);
  const shoppingCartDeleted = useRef(false);
  useSetupArtisan();
  // useListeners();
  useDynamicLinkListener();

  // Lock screen in portrait
  useEffect(() => {
    lockAsync(OrientationLock.PORTRAIT_UP);
  }, []);

  // Delete shopping cart on start up
  // useEffect(() => {
  //   shoppingCartDeleted.current = false;
  // }, [isAnonymous]);

  useEffect(() => {
    // if (shoppingCartDeleted.current || typeof isAnonymous === "undefined") {
    //   return;
    // }
    (async () => {
      try {
        // deleteShoppingCart({ anonymous: isAnonymous });
        // Refresh the token
        await auth().currentUser?.getIdToken(true);
        // queryClient.refetchQueries([uid, "loyalty"]);
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

Layout.defaultProps = {};

export default Layout;
