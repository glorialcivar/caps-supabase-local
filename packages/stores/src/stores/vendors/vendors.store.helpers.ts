// BillingData store helper functions and data
import { CONSTANTS } from "@simple/utils";

import { VendorsStoreValues } from "./vendors.store.types";
import { StoreInitialValues } from "../../types/common.types";

const { DEFAULT_VENDOR } = CONSTANTS.ARTISN;

export const defaultValues: StoreInitialValues<VendorsStoreValues> = {
  selectedVendor: DEFAULT_VENDOR,
  selectedVendorId: DEFAULT_VENDOR.id
};
