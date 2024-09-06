import useListenAuth from "./listeners/useListenAuth";
import useListenVendor from "./listeners/useListenVendor";

const useListeners = () => {
  useListenAuth();
  useListenVendor();
};

export default useListeners;
