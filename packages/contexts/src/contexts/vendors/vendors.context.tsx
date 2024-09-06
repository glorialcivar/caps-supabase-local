import { Vendor } from "@simple/types";
import { CONSTANTS } from "@simple/utils";
import React, { createContext, useCallback, useMemo, useState } from "react";

import { VendorsProviderProps as Props } from "./vendors.context.types";
import { VendorsProviderValue } from "./vendors.context.types";

const { DEFAULT_VENDOR, VENDORS } = CONSTANTS.ARTISN;

// @ts-ignore
export const VendorsContext = createContext<VendorsProviderValue>({});

export const VendorsProvider: React.FC<Props> = props => {
  const [selectedVendor, setSelectedVendor] = useState<Vendor>(DEFAULT_VENDOR);
  const [selectedVendorId, setSelectedVendorId] = useState(selectedVendor.id);

  const resetVendorsContext = useCallback(() => {
    setSelectedVendor(DEFAULT_VENDOR);
    setSelectedVendorId(DEFAULT_VENDOR.id);
  }, []);

  const setSelectedVendorHandler = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setSelectedVendorId(vendor.id);
  };

  const setSelectedVendorIdHandler = (vendorId: Vendor["id"]) => {
    const vendor = VENDORS.find(vendor => vendor.id === vendorId);

    if (!vendor) {
      throw new Error(`"${vendorId}" does not correspond to a valid vendor ID`);
    }
    setSelectedVendor(vendor);
    setSelectedVendorId(vendorId);
  };

  const value: VendorsProviderValue = useMemo(() => {
    return {
      selectedVendor,
      setSelectedVendor: setSelectedVendorHandler,
      selectedVendorId,
      setSelectedVendorId: setSelectedVendorIdHandler,
      resetVendorsContext
    };
  }, [resetVendorsContext, selectedVendor, selectedVendorId]);

  return (
    <VendorsContext.Provider value={value}>
      {props.children}
    </VendorsContext.Provider>
  );
};
