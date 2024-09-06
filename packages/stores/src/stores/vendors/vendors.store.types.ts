// Vendors store types
import { Vendor } from "@artisan-commerce/types";

import { StoreSetState } from "../../types/common.types";

export interface VendorsStoreValues {
  selectedVendor: Vendor;
  setSelectedVendor: StoreSetState<Vendor>;
  selectedVendorId: Vendor["id"];
  setSelectedVendorId: StoreSetState<Vendor["id"]>;
  reset: () => void;
}
