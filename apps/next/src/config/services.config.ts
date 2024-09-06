import { initServices as initServicesLib } from "@simple/services";
import { QueryClient } from "@tanstack/react-query";

import CONSTANTS from "config/constants";
import { shouldMock } from "utils/services.utils";

const { GENERAL, API } = CONSTANTS;
const { PLATFORM } = GENERAL;
const { MOCK_WITH_INITIAL_USER_DATA } = API;

export const initServices = (queryClient: () => QueryClient) => {
  initServicesLib({
    platform: PLATFORM,
    shouldMock,
    queryClient: queryClient(),
    mockWithInitialUserData: MOCK_WITH_INITIAL_USER_DATA
  });
};
