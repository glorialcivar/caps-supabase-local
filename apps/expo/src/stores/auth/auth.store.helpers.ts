// Auth store helper functions and data
import { StoreInitialValues } from "@simple/stores";

import { AuthStoreValues } from "./auth.store.types";

export const defaultValues: StoreInitialValues<AuthStoreValues> = {
  status: "UNKNOWN",
  uid: undefined
};
