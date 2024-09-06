import { CountryCode } from "@artisan-commerce/types";

export interface CommonResponse<T> {
  code: number;
  status: string;
  message: string;
  data: T | null;
  warning: string[] | null;
  error: string[] | null;
}

export interface CountryMeta {
  id: number;
  flag: string;
  code: string;
  isoCode: CountryCode;
  name: CountriesName;
  locale: "es" | "en";
  currency: "USD";
  currencySymbol: "$";
  decimals: number;
  // country initial coordinates
  lat: number;
  lng: number;
  bounds: Coordinate[];
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export type CountriesName = "Ecuador";

export interface TransformMillisecondsConfig {
  showSeconds?: boolean;
}

export interface ContactFormNotification {
  id: string;
  uid: string;
  email: string;
  userInfo: UserInformation;
  subject: string;
  priorityId: number;
  emailType: string;
  accountId: number;
  countryId: number;
}

export interface UserInformation {
  names: string;
  lastNames: string;
  document: string;
  phone: string;
}
