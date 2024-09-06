// Checkout store
import { getStoreSetState } from "@simple/stores";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { defaultValues } from "./checkout.store.helpers";
import { CheckoutStoreValues } from "./checkout.store.types";

export const useCheckoutStore = create<CheckoutStoreValues>()(
  devtools(
    (set, get) => {
      const values: CheckoutStoreValues = {
        ...defaultValues,
        resetRejectedOrder: () =>
          set({ placedOrder: undefined }, false, {
            type: "resetRejectedOrder"
          }),
        setTransferAnonymousId: payload => {
          const prev = get().transferAnonymousId;
          const transferAnonymousId = getStoreSetState(payload, prev);
          set({ transferAnonymousId }, false, {
            type: "setTransferAnonymousId",
            payload
          });
        },
        setSameBilling: payload => {
          const prev = get().sameBilling;
          const sameBilling = getStoreSetState(payload, prev);
          set({ sameBilling }, false, {
            type: "setSameBilling",
            payload
          });
        },
        setPlacedOrder: payload => {
          const prev = get().placedOrder;
          const placedOrder = getStoreSetState(payload, prev);
          set({ placedOrder }, false, {
            type: "setPlacedOrder",
            payload
          });
        },
        setAreTermsAccepted: payload => {
          const prev = get().areTermsAccepted;
          const areTermsAccepted = getStoreSetState(payload, prev);
          set({ areTermsAccepted }, false, {
            type: "setAreTermsAccepted",
            payload
          });
        },
        reset: () => {
          set({ ...defaultValues }, false, {
            type: "reset"
          });
        }
      };
      return values;
    },
    { name: "Checkout store" }
  )
);
