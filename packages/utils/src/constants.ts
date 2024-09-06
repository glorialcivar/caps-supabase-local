// Project constants
import { Catalogue } from "@artisan-commerce/types";
import { CountryMeta, Vendor } from "@simple/types";

export const DEFAULT_COUNTRY: CountryMeta = {
  id: 1,
  name: "Ecuador",
  code: "593",
  isoCode: "EC",
  locale: "es",
  flag: "🇪🇨",
  currency: "USD",
  currencySymbol: "$",
  decimals: 2,
  lat: -0.182259,
  lng: -78.484441,
  bounds: [
    { lat: -5.357689, lng: -75.05175 },
    { lat: 1.052285, lng: -75.255764 },
    { lat: 1.979348, lng: -82.817828 },
    { lat: -4.68279, lng: -81.307613 }
  ]
};

export const DELIVERY_CATALOGUE: Catalogue = {
  catalogueId: "1",
  name: "Delivery",
  active: true
};

export const PICK_UP_CATALOGUE: Catalogue = {
  catalogueId: "3",
  name: "Pickup",
  active: true
};

export const DEFAULT_VENDOR: Vendor = {
  id: "1256",
  name: "default",
  active: true,
  description: "Default vendor",
  images: [],
  maxPurchaseValue: -1,
  sponsored: true
};

const WITH_PICK_UP = true;
const WITH_DELIVERY = false;
const WITH_PURCHASE = WITH_PICK_UP || WITH_DELIVERY;
const WITH_MULTIPLE_PURCHASE_METHODS = WITH_DELIVERY && WITH_PICK_UP;

export const CONSTANTS = {
  // HTML title tag text (Useful to display the brand name for SEO)
  TITLE: "CHANGEME",
  // Project configurations
  ARTISN: {
    // Project Account ID
    ACCOUNT_ID: 33,
    // Default Vendor
    DEFAULT_VENDOR,
    // Vendors
    VENDORS: [DEFAULT_VENDOR],
    // Default catalogue
    DEFAULT_CATALOGUE: PICK_UP_CATALOGUE,
    // Catalogues
    CATALOGUES: [DELIVERY_CATALOGUE, PICK_UP_CATALOGUE],
    // Default country
    DEFAULT_COUNTRY,
    // Shopping cart channel id
    CHANNEL_ID: 1,
    // Catalogues
    COUNTRIES: [DEFAULT_COUNTRY],
    // The types of the goods being sold (Useful for analytics)
    CONTENT_TYPE: "CHANGEME",
    // Shopping cart default name
    SHOPPING_CART_DEFAULT_NAME: "default",
    // Shopping cart wishlist name
    SHOPPING_CART_WISHLIST_NAME: "wishlist",
    // Payment methods identifiers
    PAYMENT_METHODS: {
      // Pay with cash
      CASH_ID: 1,
      // Pay with card
      CARD_ID: 2
    },
    // Payment providers identifiers
    PAYMENT_PROVIDERS: {
      // Pay with kushki
      KUSHKI_ID: 14,
      // Pay with PayPhone
      PAY_PHONE_ID: 8,
      // Pay with PlaceToPay
      PLACE_TO_PAY: 4
    }
  },
  // REST API configurations
  API: {
    // Artisn Rest API url
    API_URL: "https://api.artisn.desarrollo-redbrand.com/",
    // Supabase Rest API version
    VERCEL_API_URL: " ",
    // Mock services, change to false if you don't want to mock
    MOCK_SERVICES: false,
    // If true a registered user with address, billing data and orders will be present
    MOCK_WITH_INITIAL_USER_DATA: false,
    // How many category groups to fetch
    CATEGORIES_PER_REQUEST: 20,
    // How many products inside each category group to fetch
    PRODUCTS_PER_CATEGORY_REQUEST: 10,
    // Default max waiting time for a request reply
    DEFAULT_REQUEST_TIMEOUT: 10000
  },
  // Activate or desactive features
  FEATURE_FLAGS: {
    // Whether loyalty functionality should be enabled
    WITH_LOYALTY: false,
    // Whether coupons functionality should be enabled
    WITH_COUPONS: false,
    // Whether delivery functionality should be enabled
    WITH_DELIVERY,
    // Whether pickup functionality should be enabled
    WITH_PICK_UP,
    // Whether the app can sell
    WITH_PURCHASE,
    // Whether the user can select a purchase method
    WITH_MULTIPLE_PURCHASE_METHODS,
    // Whether wishlist functionality should be enabled
    WITH_WISHLIST: false,
    // Allow a product to be shared
    WITH_SHARE_PRODUCT: false,
    // Allow a shopping cart to be shared
    WITH_SHARE_SHOPPING_CART: false,
    // Allow anonymous shopping cart merge
    WITH_ANONYMOUS_SHOPPING_CART_TOKEN: true,
    // Allow anonymous flow
    WITH_ANONYMOUS: true,
    // Show the product details modal if needed
    // If not add product to cart without navigating to the details page
    // Show notification when product is added
    WITH_ADD_DIRECTLY_TO_CART: false,
    // Show product modal
    WITH_PRODUCT_MODAL: false,
    // Show cart drawer
    WITH_CART_DRAWER: false,
    // Show upsale modal
    WITH_UPSALE_MODAL: false,
    // Show crossale modal
    WITH_CROSSALE_MODAL: false,
    // Store coupons
    WITH_STORE_COUPONS: false,
    // Show talk shop
    WITH_TALK_SHOP: false,
    // Show SelectAddressDropdown component in Navbar
    WITH_SELECT_ADDRESS_DROPDOWN: false
  },
  // Limit user actions
  CONSTRAINTS: {
    // Number of cards a user can have
    MAX_NUMBER_OF_CARDS: 3,
    // Number of shipping addresses a user can have
    MAX_NUMBER_OF_SHIPPING_ADDRESSES: 5,
    // Number of billing data a user can have
    MAX_NUMBER_OF_BILLING_DATA: 5
  },
  // Store user preferences
  STORAGE: {
    // Shipping address local storage token
    SHIPPING_ADDRESS_TOKEN: "artisn-selected-shipping-address",
    // Billing data local storage token
    BILLING_DATA_TOKEN: "artisn-selected-billing-data",
    // Card local storage token
    CARD_TOKEN: "artisn-selected-card",
    // Recent category local storage token
    CATEGORY_TOKEN: "artisn-recent-category",
    // Selected coordinates local storage token
    SELECTED_COORDINATES_TOKEN: "artisn-selected-coordinates",
    // Local storage theme preference key
    THEME_PREFERENCE_TOKEN: "artisn-theme-preference",
    // Anonymous shopping cart
    ANONYMOUS_SHOPPING_CART_TOKEN: "anonymous-shopping-cart",
    // Selected city local storage token
    SELECTED_CITY_TOKEN: "artisn-selected-city",
    // Selected storeId local storage token
    SELECTED_STORE_ID_TOKEN: "artisn-selected-storeId",
    // Email in use for magic link authentication
    MAGIC_LINK_EMAIL_TOKEN: "artisn-magic-link",
    // SSO user to auto fill the second step form
    SSO_USER_TOKEN: "artisn-sso-user",
    // Transfer anonymous id
    TRANSFER_ANONYMOUS_ID_TOKEN: "transfer-anonymous-id"
  },
  // General settings
  GENERAL: {
    // Excluded status codes that should not be logged
    EXCLUDED_LOGGER_STATUS_CODES: [422],
    // Included environments that should be logged
    INCLUDED_LOGGER_ENVS: ["staging", "production"],
    // Included Internationalization environments that should be logged to the console
    INCLUDED_INTL_LOG_ENVS: ["production"],
    // Trade Ecuador url
    COMPANY_URL: "https://trade.ec/",
    // URL for the iOS app
    APP_STORE_URL: "https://apps.apple.com/us/app/CHANGEME",
    // URL for the android app
    PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=CHANGEME",
    // Web URL
    WEB_URL: "https://www.CHANGEME.com",
    // Default Billing Data document,
    DEFAULT_DOCUMENT: "0999999999",
    // API max page size
    MAX_PAGE_SIZE: 100
  },
  INTEGRATIONS: {
    PUSH_NOTIFICATIONS: {}
  },
  APP: {},
  PROVIDERS_SIGN_IN: {
    GOOGLE_PROVIDER: "google.com",
    FACEBOOK_PROVIDER: "facebook.com",
    APPLE_PROVIDER: "apple.com",
    PASSWORD_PROVIDER: "password"
  },
  WHATSAPP_API: "https://api.whatsapp.com/send?phone=",
  WHATSAPP_NUMBER: "",
  EMAIL: ""
};
