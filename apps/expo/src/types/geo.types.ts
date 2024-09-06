// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Google {
  interface GoogleMaps {
    (
      coordinates: Coordinates,
      plus_code: PlusCode,
      reverseGeocodeAddress: ReverseGeocodeAddress,
      addressComponent: AddressComponent,
      viewport: Viewport,
      geometry: Geometry,
      geocode: Geocode,
      addressType: AddressType,
      addressComponentType: AddressComponentType,
      location: Location
    ): void;
  }

  interface Autocomplete {
    description: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: AddressComponentType[];
  }
  interface AutocompleteResponse {
    predictions: Autocomplete[];
  }

  interface MatchedSubstring {
    length: number;
    offset: number;
  }

  interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[];
    secondary_text: string;
  }

  interface Term {
    offset: number;
    value: string;
  }

  interface Coordinates {
    lat: number;
    lng: number;
  }

  interface Geocode {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    type: AddressType[];
  }

  interface PlusCode {
    compound_code: string;
    global_code: string;
  }

  interface ReverseGeocodeAddress extends Geocode {
    plus_code: PlusCode;
  }

  interface AddressComponent {
    long_name: string;
    short_name: string;
    types: AddressComponentType[];
  }

  interface Viewport {
    northeast: Coordinates;
    southwest: Coordinates;
  }

  interface Geometry {
    location: Coordinates;
    location_type: Location;
    viewport: Viewport;
  }

  type AddressType =
    | "establishment"
    | "food"
    | "point_of_interest"
    | "restaurant";

  type AddressComponentType =
    | "street_number"
    | "route"
    | "political"
    | "neighborhood"
    | "country"
    | "locality"
    | "postal_code"
    | "administrative_area_level_1"
    | "administrative_area_level_2"
    | "administrative_area_level_3";

  type Location = "ROOFTOP" | "GEOMETRIC_CENTER";
}

export interface StorePolygonCoords {
  [key: number]: Google.Coordinates[][];
}
