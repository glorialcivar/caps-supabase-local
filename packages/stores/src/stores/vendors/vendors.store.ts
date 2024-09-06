// Vendors store
import { create } from "zustand";

import { defaultValues } from "./vendors.store.helpers";
import { VendorsStoreValues } from "./vendors.store.types";
import { getStoreSetState } from "../../utils/common.utils";

export const useVendorsStore = create<VendorsStoreValues>((set, get) => {
  return {
    ...defaultValues,
    setSelectedVendor: payload => {
      const prev = get().selectedVendor;
      const selectedVendor = getStoreSetState(payload, prev);
      set({ selectedVendor });
    },
    setSelectedVendorId: payload => {
      const prev = get().selectedVendorId;
      const selectedVendorId = getStoreSetState(payload, prev);
      set({ selectedVendorId });
    },
    reset: () => set({ ...defaultValues })
  };
});
