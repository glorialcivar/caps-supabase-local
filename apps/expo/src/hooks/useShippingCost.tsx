// useShippingCost custom hook

// import { useFetchShippingCost } from "@simple/services";
// import { useStoresStore } from "@simple/stores";
// import { useGeoStore } from "@simple/stores";
// import { useCataloguesStore } from "@simple/stores";
// import { useMemo } from "react";

const useShippingCost = () => {
  // const catalogueId = useCataloguesStore(
  //   state => state.selectedCatalogue.catalogueId
  // );
  // const selectedStore = useStoresStore(state => state.selectedStore);
  // const { storeId } = selectedStore ?? {};
  // const selectedCoordinates = useGeoStore(state => state.selectedCoordinates);
  // const { lat, lng } = selectedCoordinates ?? {};

  // // const { data: shippingCost } = useFetchShippingCost({
  // //   storeId,
  // //   catalogueId,
  // //   lat,
  // //   lng
  // // });

  // return useMemo(() => {
  //   return shippingCost ?? null;
  // }, [shippingCost]);
  return null;
};

export default useShippingCost;
