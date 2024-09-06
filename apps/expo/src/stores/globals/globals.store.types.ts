// Globals store types

export type GlobalsStoreValues = {
  isNavigationReady: boolean;
  canGoToSecondStep: boolean;
  mustUpdate: boolean;
  isOutOfService: boolean;
  isOTAUpdate: boolean;
  setIsOTAUpdate: (isOTAUpdate: boolean) => void;
  setIsNavigationReady: (isNavigationReady: boolean) => void;
  setCanGoToSecondStep: (canGoToSecondStep: boolean) => void;
  setMustUpdate: (mustUpdate: boolean) => void;
  setIsOutOfService: (isOutOfService: boolean) => void;
  reset: () => void;
};
