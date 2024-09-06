import { useContext } from "react";

import { VendorsContext } from "./vendors.context";
import { VendorsProviderValue } from "./vendors.context.types";

export const useVendors = () => {
  const context = useContext<VendorsProviderValue>(VendorsContext);
  if (typeof context === "undefined") {
    throw new Error("useVendors must be used within a VendorsProvider");
  }
  return context;
};

export default useVendors;
