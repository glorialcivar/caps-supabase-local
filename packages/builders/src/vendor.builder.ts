// Vendor builders
import { vendorBuilders } from "@artisan-commerce/builders";
import { Vendor } from "@simple/types";

const { buildVendor: buildVendorSDK } = vendorBuilders;

export const buildVendor = (overrides: Partial<Vendor> = {}): Vendor => {
  const { id, ...rest } = overrides;
  const vendor = buildVendorSDK({ ...rest });

  return {
    ...vendor,
    id: `${vendor.id}`,
    ...overrides
  };
};
