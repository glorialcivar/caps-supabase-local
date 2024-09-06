// Globals store
import { getStoreSetState } from "@simple/stores";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { defaultValues } from "./globals.store.helpers";
import { GlobalsStoreValues } from "./globals.store.types";

export const useGlobalsStore = create<GlobalsStoreValues>()(
  devtools(
    (set, get) => {
      const values: GlobalsStoreValues = {
        ...defaultValues,
        setCanGoToSecondStep: payload => {
          const prev = get().canGoToSecondStep;
          const canGoToSecondStep = getStoreSetState(payload, prev);
          set({ canGoToSecondStep }, false, {
            type: "setCanGoToSecondStep",
            payload
          });
        },
        setIsNavigationReady: payload => {
          const prev = get().isNavigationReady;
          const isNavigationReady = getStoreSetState(payload, prev);
          set({ isNavigationReady }, false, {
            type: "setIsNavigationReady",
            payload
          });
        },
        setIsOTAUpdate: payload => {
          const prev = get().isOTAUpdate;
          const isOTAUpdate = getStoreSetState(payload, prev);
          set({ isOTAUpdate }, false, {
            type: "setIsOTAUpdate",
            payload
          });
        },
        setIsOutOfService: payload => {
          const prev = get().isOutOfService;
          const isOutOfService = getStoreSetState(payload, prev);
          set({ isOutOfService }, false, {
            type: "setIsOutOfService",
            payload
          });
        },
        setMustUpdate: payload => {
          const prev = get().mustUpdate;
          const mustUpdate = getStoreSetState(payload, prev);
          set({ mustUpdate }, false, {
            type: "setMustUpdate",
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
    { name: "Globals store" }
  )
);
