// Vendor types and interfaces
import { Vendor as SDKVendor } from "@artisan-commerce/types";

export interface Vendor extends Omit<SDKVendor, "id"> {
  id: string;
}
