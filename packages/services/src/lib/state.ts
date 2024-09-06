// State functions and data
import { CONSTANTS } from "@simple/utils";
import axios from "axios";

import { GlobalState } from "../types/common.types";

const { ARTISN, API } = CONSTANTS;
const { ACCOUNT_ID } = ARTISN;
const { API_URL, MOCK_WITH_INITIAL_USER_DATA } = API;
const { VERCEL_API_URL } = API;

/** The initial global state value */
export const initialState: GlobalState = {
  shouldMock: false,
  accountId: ACCOUNT_ID,
  apiUrl: API_URL,
  apiUrl3: VERCEL_API_URL,
  platform: undefined,
  defaultRequestTimeout: 10000,
  axiosDefault: axios,
  axiosDefaultSupa: axios,
  initialized: false,
  user: null,
  mockWithInitialUserData: MOCK_WITH_INITIAL_USER_DATA,
  queryClient: undefined
};

Object.freeze(initialState);

let state: GlobalState = { ...initialState };

Object.seal(state);

/**
 * Sets the global state.
 *
 * @param {GlobalState} overrides New values for the global state
 */
export const setState = (overrides: Partial<GlobalState>) => {
  state = { ...state, ...overrides };
};

/**
 * Gets the global state.
 *
 * @returns {GlobalState} The current global state value
 */
export const getState = (): GlobalState => {
  return { ...state };
};
