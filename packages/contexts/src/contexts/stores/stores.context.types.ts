// Interfaces and types from context Stores
import { Store } from "@artisan-commerce/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

// Provider Props
export interface StoresProviderProps {
  children: ReactNode;
}

// Provider value
export interface StoresProviderValue {
  defaultStore: Store | undefined;
  noCoverage: boolean;
  setNoCoverage: Dispatch<SetStateAction<boolean>>;
  setDefaultStore: Dispatch<SetStateAction<Store | undefined>>;
  selectedStore: Store | undefined;
  setSelectedStore: Dispatch<SetStateAction<Store | undefined>>;
  closestStore: Store | undefined;
  setClosestStore: Dispatch<SetStateAction<Store | undefined>>;
  showStoreNotification: boolean;
  setShowStoreNotification: Dispatch<SetStateAction<boolean>>;
  resetStoresContext: () => void;
}
