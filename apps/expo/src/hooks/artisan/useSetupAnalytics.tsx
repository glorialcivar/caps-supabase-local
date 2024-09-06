import { initAnalytics } from "artisn-rn/analytics";
import { useEffect } from "react";

import { facebookProvider, googleProvider } from "config/artisn.config";
import CONSTANTS from "config/constants";
// import { Platform } from "react-native";
// import { request, PERMISSIONS } from "react-native-permissions";
// import { Settings } from "react-native-fbsdk-next";

import AppJSON from "../../../app.json";

const { ARTISN } = CONSTANTS;
const { ACCOUNT_ID } = ARTISN;

const useSetupAnalytics = () => {
  // TODO: uncomment this when geo are implemented
  //   useEffect(() => {
  //     if (Platform.OS === "ios") {
  //       request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY).then(result => {
  //         if (result !== "granted") {
  //           Settings.setAdvertiserTrackingEnabled(false);
  //         } else {
  //           Settings.setAdvertiserTrackingEnabled(true);
  //         }
  //       });
  //     }
  //   }, []);

  useEffect(() => {
    initAnalytics({
      providers: [facebookProvider, googleProvider],
      activeVendor: "-1",
      vendors: undefined,
      meta: {
        accountId: ACCOUNT_ID,
        appName: AppJSON.expo.name,
        versionApp: AppJSON.expo.version
      },
      debug: false
    });
  }, []);
};

export default useSetupAnalytics;
