import { useVendorsStore } from "@simple/stores";
import { events } from "artisn-rn/analytics";
import { useEffect, useRef } from "react";

import CONSTANTS from "config/constants";

const { DEFAULT_VENDOR } = CONSTANTS.ARTISN;
const { logSetVendor, logChangeVendor } = events.vendor;

const useListenVendor = () => {
  const selectedVendorId = useVendorsStore(state => state.selectedVendor.id);
  const prevVendorId = useRef(selectedVendorId);

  useEffect(() => {
    logSetVendor({
      vendorId: DEFAULT_VENDOR.id
    });
  }, []);

  useEffect(() => {
    if (prevVendorId.current === selectedVendorId) return;
    prevVendorId.current = selectedVendorId;

    logChangeVendor({
      previousVendorId: prevVendorId.current,
      nextVendorId: selectedVendorId
    });
  }, [selectedVendorId]);
};

export default useListenVendor;
