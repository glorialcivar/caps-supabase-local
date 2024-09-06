// Interfaces and types from context Vendors
import { Vendor } from "@simple/types";
import { ReactNode } from "react";

// Provider Props
export interface VendorsProviderProps {
  children: ReactNode;
}

// Provider value
export interface VendorsProviderValue {
  selectedVendor: Vendor;
  setSelectedVendor: (vendor: Vendor) => void;
  selectedVendorId: Vendor["id"];
  setSelectedVendorId: (vendorId: Vendor["id"]) => void;
  resetVendorsContext: () => void;
}
