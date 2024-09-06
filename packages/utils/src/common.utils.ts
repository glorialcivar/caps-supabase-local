// Common utility functions
import { CartProduct, Benefit, ProductPrices } from "@artisan-commerce/types";
import { TransformMillisecondsConfig } from "@simple/types";

export const sortByDate = (a: string, b: string) => {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();

  if (dateA > dateB) {
    return 1;
  } else if (dateA < dateB) {
    return -1;
  } else {
    return 0;
  }
};

export const sortByProductDate = (a: CartProduct, b: CartProduct) => {
  return sortByDate(a.createdAt, b.createdAt);
};

export const defaultFunction = () => {};

export const transformToSeconds = (milliseconds: number) => {
  const seconds = Math.round(milliseconds / 1000);
  return seconds < 10 ? `0${seconds}` : seconds;
};

export const transformToMinutes = (
  milliseconds: number,
  config?: TransformMillisecondsConfig
) => {
  const remnant = milliseconds % (1000 * 60);
  const seconds = transformToSeconds(remnant);
  const minutes = (milliseconds - remnant) / (1000 * 60);
  if (config?.showSeconds) {
    return minutes < 10 ? `0${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }
  return minutes < 10 ? `0${minutes}` : minutes;
};

export const transformToHours = (
  milliseconds: number,
  config?: TransformMillisecondsConfig
) => {
  const remnant = milliseconds % (1000 * 60 * 60);
  const minutes = transformToMinutes(remnant, config);
  const hours = (milliseconds - remnant) / (1000 * 60 * 60);
  return hours < 10 ? `0${hours}:${minutes}` : `${hours}:${minutes}`;
};

export const removeDuplicates = <T>(items: T[]) => {
  return Array.from(new Set(items));
};

export const getNameAndLastName = (completeName: string) => {
  const [name, ...rest] = completeName.split(" ");
  return { name, lastName: rest.join(" ") };
};

export const getPricesByCategory = (
  prices?: ProductPrices,
  points?: boolean
) => {
  if (!prices) return;
  if (points) return prices?.POINTS?.netPrice;
  return prices?.NORMAL?.netPrice;
};

export const getBenefitProductId = (
  temporalBenefit?: Benefit,
  cartBenefit?: Benefit
) => {
  const { type, award } = temporalBenefit ?? cartBenefit ?? {};
  return type === "PRODUCT" && Array.isArray(award)
    ? award?.[0]?.productId.toString()
    : "";
};

/**
 * Function to calculate the great-circle distance between two points.
 *
 * This uses the ‘haversine’ formula to calculate the great-circle distance
 * between two points – that is, the shortest distance over the earth’s surface
 * – giving an ‘as-the-crow-flies’ distance between the points.
 *
 * @see https://www.movable-type.co.uk/scripts/latlong.html
 * @param {number} lat1 First latitude value
 * @param {number} lng1 First longitude value
 * @param {number} lat2 Second latitude value
 * @param {number} lng2 Second longitude value
 * @returns {number} Distance in meters
 */
export const computeDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres;
};

export const sanitizeQueryParams = (query: NodeJS.Dict<string | string[]>) => {
  const newQuery: Record<string, string | undefined> = {};
  Object.entries(query).forEach(entry => {
    const [key, value] = entry;
    if (typeof value === "string") newQuery[key] = value;
  });
  return newQuery;
};

export const legacyClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const clone = <T>(obj: T): T => {
  if ("__DEV__" in global) return legacyClone(obj);
  return structuredClone(obj);
};
