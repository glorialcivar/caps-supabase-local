// Vendors services
import { mockVendors } from "./vendors.service.mock";
import { Vendor } from "./vendors.service.types";
import { getState } from "../state";

//TODO: change when there is the EP
const baseUrl = "api/v3/vendors";

/**
 * Fetches a list of the vendors of the selected mall
 *
 * @param {string} mallId Id of the selected mall.
 * @returns {Vendor[]} The list of the vendors of the selected mall.
 */
export const fetchVendors = async (mallId: string): Promise<Vendor[]> => {
  const { shouldMock, axiosDefault } = getState();

  try {
    if (!shouldMock) {
      const { data } = await axiosDefault.get(baseUrl, {
        params: {
          mallId
        }
      });

      return data.data;
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockVendors);
        }, 1000);
      });
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
