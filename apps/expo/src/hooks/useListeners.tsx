import useListenAddresses from "./listeners/useListenAddresses";
import useListenAuth from "./listeners/useListenAuth";
import useListenBillingData from "./listeners/useListenBillingData";
import useListenGlobals from "./listeners/useListenGlobals";
import useListenPayments from "./listeners/useListenPayments";
import useListenVendor from "./listeners/useListenVendor";

const useListeners = () => {
  useListenAuth();
  useListenPayments();
  useListenAddresses();
  useListenBillingData();
  useListenVendor();
  useListenGlobals();
};

export default useListeners;
