import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFetchBillingData } from "@simple/services";
import { useBillingDataStore } from "@simple/stores";
import { useEffect } from "react";

import CONSTANTS from "config/constants";
// import { useAuthStore } from "stores/auth/auth.store";

const { BILLING_DATA_TOKEN } = CONSTANTS.STORAGE;

const useListenBillingData = () => {
  const selectedBillingData = useBillingDataStore(
    state => state.selectedBillingData
  );
  const setSelectedBillingData = useBillingDataStore(
    state => state.setSelectedBillingData
  );
  // const auth = useAuthStore();
  // const { data: billingDataList } = useFetchBillingData(auth);

  /** Get billing data from local storage and set it on context. */
  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem(BILLING_DATA_TOKEN);
      const lastSelectedBillingData = value ? JSON.parse(value) : undefined;

      setSelectedBillingData(lastSelectedBillingData);
    })();
  }, [setSelectedBillingData]);

  /**
   * Every time the selected billing data changes,
   * save it on local storage.
   */
  useEffect(() => {
    if (!selectedBillingData) return;
    AsyncStorage.setItem(
      BILLING_DATA_TOKEN,
      JSON.stringify(selectedBillingData)
    );
  }, [selectedBillingData]);

  // useEffect(() => {
  //   if (!billingDataList) return;
  //   const defaultBillingData = billingDataList.find(
  //     billingData => billingData.default
  //   );
  //   if (!defaultBillingData) return;
  //   setSelectedBillingData(prev => {
  //     if (prev) return prev;
  //     return defaultBillingData;
  //   });
  // }, [billingDataList, setSelectedBillingData]);
};

export default useListenBillingData;
