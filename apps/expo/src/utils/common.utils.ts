// Common utility functions

import CONSTANTS from "config/constants";

const { MOCK_SERVICES } = CONSTANTS.API;

// This value should not be modified if you want to disable mocks
// To disable mocks, go to config/constants.ts
export const shouldMock =
  process.env.ENV === "production" ? false : MOCK_SERVICES;

export const defaultFunction = () => {};

export const getQueryParams = <T = Record<string, string>>(
  url: string
): Map<keyof T, string> => {
  const route = url.replace(/.*?:\/\//g, "");
  const [, queryString] = route.split("?") ?? [];
  const keyPairs = queryString ? queryString.split("&") : [];
  const queryParams = new Map<keyof T, string>();
  keyPairs.forEach(keyPair => {
    const [key, value] = keyPair.split("=");
    queryParams.set(key as keyof T, value!);
  });
  return queryParams;
};
