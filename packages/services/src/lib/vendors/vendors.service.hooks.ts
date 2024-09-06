import { useQuery } from "@tanstack/react-query";

import { fetchVendors } from "./vendors.service";

export const useFetchVendors = (mallId?: string) => {
  return useQuery(["vendors"], () => fetchVendors(mallId!), {
    enabled: !!mallId
  });
};
