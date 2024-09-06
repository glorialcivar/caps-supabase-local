// Checkout store types
import { StoreSetState } from "@simple/stores";
import { Order } from "artisn-rn/types";

export type CheckoutStoreValues = {
  sameBilling: boolean;
  setSameBilling: StoreSetState<boolean>;
  placedOrder: Order | undefined;
  setPlacedOrder: StoreSetState<Order | undefined>;
  areTermsAccepted: boolean;
  setAreTermsAccepted: StoreSetState<boolean>;
  transferAnonymousId: string | undefined;
  setTransferAnonymousId: StoreSetState<string | undefined>;
  resetRejectedOrder: () => void;
  reset: () => void;
};
