// Checkout store helper functions and data
import { StoreInitialValues } from "@simple/stores";

import { CheckoutStoreValues } from "./checkout.store.types";

export const defaultValues: StoreInitialValues<CheckoutStoreValues> = {
  areTermsAccepted: false,
  placedOrder: undefined,
  sameBilling: true,
  transferAnonymousId: undefined
};
