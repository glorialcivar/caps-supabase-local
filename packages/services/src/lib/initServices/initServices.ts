import axios from "axios";

import { ServicesConfig } from "../../types/common.types";
import { getState, setState } from "../state";

/**
 * Initializes the services library, here is where the axiosDefault will be
 * created.
 *
 * @param {ServicesConfig} config The services initial configuration
 */
export const initServices = (config: ServicesConfig) => {
  const currentState = getState();
  const { platform, defaultRequestTimeout } = config;
  const { apiUrl, accountId, initialized } = currentState;
  const { apiUrl3 } = currentState;

  if (initialized) {
    console.warn("The services have already been initialized");
    return;
  }

  const source = axios.CancelToken.source();

  const axiosDefault = axios.create({
    baseURL: apiUrl,
    timeout: defaultRequestTimeout ?? currentState.defaultRequestTimeout,
    headers: {
      Platform: platform,
      account: `${accountId}`
    },
    cancelToken: source.token
  });

  const axiosDefaultSupa = axios.create({
    ...axiosDefault,
    headers: {
      Platform: platform,
      account: `${accountId}`,
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    },
    baseURL: apiUrl3
  });

  // Report to logger middleware
  const report = (error: any) => {
    return Promise.reject(error);
  };

  axiosDefault.interceptors.response.use(
    (response: any) => {
      // Do something with response data
      return response;
    },
    (error: any) => {
      // Do something with response error
      return report(error);
    }
  );

  setState({
    ...currentState,
    ...config,
    axiosDefault,
    axiosDefaultSupa,
    initialized: true
  });
};
