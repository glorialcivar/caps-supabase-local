// Common utility functions
import { PaymentStatusPlaceToPay } from "@simple/types";
import { getPlaceToPayAmount, getPlaceToPayReference } from "@simple/utils";
import { Order } from "artisn-rn/types";

import CONSTANTS from "config/constants";
import { t } from "i18n/i18n";

const { MOCK_SERVICES } = CONSTANTS.API;

// This value should not be modified if you want to disable mocks
// To disable mocks, go to config/constants.ts
export const shouldMock =
  process.env.ENV === "production" ? false : MOCK_SERVICES;

export const defaultFunction = () => {};

export const getPlaceToPayMessage = (
  formatByCurrency: (value: number | null | undefined) => string,
  status?: PaymentStatusPlaceToPay,
  order?: Order
) => {
  const reference = getPlaceToPayReference(order);
  const orderAmount = getPlaceToPayAmount(order);
  const amount = formatByCurrency(+orderAmount);
  switch (status) {
    case "APPROVED":
      return t("purchaseStatus.p2pSuccess", { reference, amount });
    case "PENDING":
      return t("purchaseStatus.p2pPending", { reference, amount });
    case "REJECTED":
      return t("purchaseStatus.p2pRejected", { reference, amount });
    default:
      return "";
  }
};

export const getPurchaseStatusMessage = (
  formatByCurrency: (value: number | null | undefined) => string,
  status?: PaymentStatusPlaceToPay,
  order?: Order
) => {
  return `${getPlaceToPayMessage(formatByCurrency, status, order)}`;
};

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
