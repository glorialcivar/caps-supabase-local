// Globals store helper functions and data
import { StoreInitialValues } from "@simple/stores";

import { GlobalsStoreValues } from "./globals.store.types";

export const defaultValues: StoreInitialValues<GlobalsStoreValues> = {
  canGoToSecondStep: true,
  isNavigationReady: false,
  isOTAUpdate: false,
  isOutOfService: false,
  mustUpdate: false
};
