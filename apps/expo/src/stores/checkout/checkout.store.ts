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
          set({ status: undefined, placedOrder: undefined }, false, {
            type: "resetRejectedOrder"
          }),
        setUserFormValues: payload => {
          const prev = get().userFormValues;
          const userFormValues = getStoreSetState(payload, prev);
          set({ userFormValues }, false, {
            type: "setUserFormValues",
            payload
          });
        },
        setTransferAnonymousId: payload => {
          const prev = get().transferAnonymousId;
          const transferAnonymousId = getStoreSetState(payload, prev);
          set({ transferAnonymousId }, false, {
            type: "setTransferAnonymousId",
            payload
          });
        },
        setStep: payload => {
          const prev = get().step;
          const step = getStoreSetState(payload, prev);
          set({ step }, false, {
            type: "setStep",
            payload
          });
        },
        setStatus: payload => {
          const prev = get().status;
          const status = getStoreSetState(payload, prev);
          set({ status }, false, {
            type: "setStatus",
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
        setBillingFormValues: payload => {
          const prev = get().billingFormValues;
          const billingFormValues = getStoreSetState(payload, prev);
          set({ billingFormValues }, false, {
            type: "setBillingFormValues",
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
