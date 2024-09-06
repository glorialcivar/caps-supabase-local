import { getState } from "../lib/state";

/**
 * Builds custom headers to be used in the request.
 *
 * @param additionalHeaders Any needed header
 * @returns
 */
export const buildHeaders = async (
  additionalHeaders?: Record<string, string | number | boolean | undefined>
) => {
  const { user, accountId, platform } = getState();
  const token = await user?.getIdToken();

  return {
    Platform: platform ?? "",
    account: `${accountId}`,
    Authorization: `Bearer ${token}`,
    ...additionalHeaders
  };
};

export const buildArtisnHeaders = async () => {
  const { user, accountId, platform } = getState();
  const token = await user?.getIdToken();
  const headers = new Headers();

  headers.set("Platform", platform ?? "");
  headers.set("account", `${accountId}`);
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json");

  return headers;
};

export const buildMasivoHeaders = async (token: string) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
};

export const buildMulticinesHeaders = async (
  token: string,
  accountId: string
) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    account: accountId
  };
};
