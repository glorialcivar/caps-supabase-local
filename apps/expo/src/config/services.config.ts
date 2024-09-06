import { initServices } from "@simple/services";

import { getQueryClient } from "./query.config";
import CONSTANTS from "config/constants";
import { shouldMock } from "utils/common.utils";

const { GENERAL, API } = CONSTANTS;
const { PLATFORM } = GENERAL;
const { MOCK_WITH_INITIAL_USER_DATA } = API;

initServices({
  platform: PLATFORM,
  shouldMock,
  queryClient: getQueryClient(),
  mockWithInitialUserData: MOCK_WITH_INITIAL_USER_DATA
});
