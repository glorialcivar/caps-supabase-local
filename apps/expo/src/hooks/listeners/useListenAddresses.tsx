import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFetchShippingAddresses } from "@simple/services";
import { useShippingAddressStore } from "@simple/stores";
import { useEffect } from "react";

import CONSTANTS from "config/constants";
// import { useAuthStore } from "stores/auth/auth.store";

const { SHIPPING_ADDRESS_TOKEN } = CONSTANTS.STORAGE;

const useListenAddresses = () => {
  const selectedShippingAddress = useShippingAddressStore(
    state => state.selectedShippingAddress
  );
  const setSelectedShippingAddress = useShippingAddressStore(
    state => state.setSelectedShippingAddress
  );
  // const auth = useAuthStore();
  // const { data: addressList } = useFetchShippingAddresses(auth);

  /** Get shipping address from local storage and set it on context. */
  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem(SHIPPING_ADDRESS_TOKEN);
      const lastSelectedShippingAddress = value ? JSON.parse(value) : undefined;

      setSelectedShippingAddress(lastSelectedShippingAddress);
    })();
  }, [setSelectedShippingAddress]);

  /**
   * Every time the selected shipping address changes,
   * save it on local storage.
   */
  useEffect(() => {
    if (!selectedShippingAddress) return;
    AsyncStorage.setItem(
      SHIPPING_ADDRESS_TOKEN,
      JSON.stringify(selectedShippingAddress)
    );
  }, [selectedShippingAddress]);

  // useEffect(() => {
  //   if (!addressList) return;
  //   const defaultAddress = addressList.find(address => address.default);
  //   if (!defaultAddress) return;
  //   setSelectedShippingAddress(prev => {
  //     if (prev) return prev;
  //     return defaultAddress;
  //   });
  // }, [addressList, setSelectedShippingAddress]);
};

export default useListenAddresses;
