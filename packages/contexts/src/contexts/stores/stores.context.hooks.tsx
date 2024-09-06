import { useContext } from "react";

import { StoresContext } from "./stores.context";
import { StoresProviderValue } from "./stores.context.types";

export const useStores = () => {
  const context = useContext<StoresProviderValue>(StoresContext);
  if (typeof context === "undefined") {
    throw new Error("useStores must be used within a StoresProvider");
  }
  return context;
};
