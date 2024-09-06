import { Store } from "@artisan-commerce/types";
import React, { useState, createContext, useMemo } from "react";

import { StoresProviderProps as Props } from "./stores.context.types";
import { StoresProviderValue } from "./stores.context.types";

// @ts-ignore
export const StoresContext = createContext<StoresProviderValue>({});

export const StoresProvider: React.FC<Props> = props => {
  const [defaultStore, setDefaultStore] = useState<Store>();
  const [noCoverage, setNoCoverage] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>();
  const [showStoreNotification, setShowStoreNotification] = useState(false);
  const [closestStore, setClosestStore] = useState<Store>();

  const resetStoresContext = () => {
    setNoCoverage(false);
    setSelectedStore(undefined);
  };

  const value: StoresProviderValue = useMemo(() => {
    return {
      defaultStore,
      setDefaultStore,
      selectedStore,
      setSelectedStore,
      noCoverage,
      setNoCoverage,
      showStoreNotification,
      setShowStoreNotification,
      closestStore,
      setClosestStore,
      resetStoresContext
    };
  }, [
    defaultStore,
    selectedStore,
    noCoverage,
    showStoreNotification,
    closestStore
  ]);

  return (
    <StoresContext.Provider value={value}>
      {props.children}
    </StoresContext.Provider>
  );
};
