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
  getQueryClient,
  mockWithInitialUserData: MOCK_WITH_INITIAL_USER_DATA,
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
});
