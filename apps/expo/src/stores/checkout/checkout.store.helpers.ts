// Checkout store helper functions and data
import { StoreInitialValues } from "@simple/stores";

import { CheckoutStoreValues } from "./checkout.store.types";

export const defaultValues: StoreInitialValues<CheckoutStoreValues> = {
  areTermsAccepted: false,
  billingFormValues: undefined,
  placedOrder: undefined,
  sameBilling: true,
  status: undefined,
  step: undefined,
  transferAnonymousId: undefined,
  userFormValues: undefined
};
