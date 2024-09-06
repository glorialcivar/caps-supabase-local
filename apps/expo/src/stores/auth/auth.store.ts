// Auth store
import { getStoreSetState } from "@simple/stores";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { defaultValues } from "./auth.store.helpers";
import { AuthStoreValues } from "./auth.store.types";

export const useAuthStore = create<AuthStoreValues>()(
  devtools(
    (set, get) => {
      const values: AuthStoreValues = {
        ...defaultValues,
        setUid: payload => {
          const prev = get().uid;
          const uid = getStoreSetState(payload, prev);
          set({ uid }, false, {
            type: "setUid",
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
        reset: () => {
          set({ ...defaultValues }, false, {
            type: "reset"
          });
        }
      };
      return values;
    },
    { name: "Auth store" }
  )
);
