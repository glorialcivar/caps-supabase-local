import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-native-firebase/app", () => {
  return () => ({});
});

jest.mock("@react-native-firebase/firestore", () => () => ({
  collection: jest.fn(() => ({ doc: jest.fn(() => ({ onSnapshot: jest.fn })) }))
}));

jest.mock("@react-native-firebase/auth", () => {
  return () => ({
    onAuthStateChanged: jest.fn(),
    signInAnonymously: jest.fn()
  });
});

jest.mock("@react-native-firebase/dynamic-links", () => {
  return () => ({
    onLink: jest.fn(),
    getInitialLink: () => ({
      then: jest.fn()
    })
  });
});

jest.mock("expo-linking", () => ({
  createURL: jest.fn(),
  getInitialURL: () => ({
    then: jest.fn()
  }),
  addEventListener: jest.fn()
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn()
  }
}));

jest.mock("@invertase/react-native-apple-authentication", () => ({
  appleAuth: jest.fn
}));

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    formState: {
      errors: {}
    },
    register: jest.fn,
    setValue: jest.fn
  }),
  useController: () => ({
    field: {
      onChange: jest.fn,
      onBlur: jest.fn,
      value: jest.fn()
    }
  }),
  useForm: () => ({
    handleSubmit: jest.fn,
    watch: jest.fn,
    register: jest.fn,
    setValue: jest.fn
  }),
  useFormState: () => ({
    errors: {}
  }),
  useWatch: () => undefined,
  FormProvider: jest.fn
}));

jest.mock("artisn-rn/shopping-cart", () => ({
  emptyShoppingCart: jest.fn,
  getShoppingCartProducts: jest.fn,
  getShoppingCartTotal: jest.fn
}));

jest.mock("i18n-js", () => {
  return {
    I18n: class I18n {
      t = () => {};
    }
  };
});

jest.mock("artisn-rn/analytics", () => ({
  Providers: { FacebookPixel: jest.fn(), GoogleAnalytics: jest.fn() },
  initAnalytics: jest.fn(),
  events: {
    auth: {
      logChangePasswordAttempt: jest.fn(),
      logSignUpAttempt: jest.fn(),
      logChangePasswordFail: jest.fn(),
      logChangePasswordSuccess: jest.fn(),
      logSignIn: jest.fn(),
      logSignOut: jest.fn(),
      logSignUp: jest.fn()
    },
    banner: {
      logBannerImpression: jest.fn(),
      logSelectBanner: jest.fn()
    },
    billing: {
      logAddBillingInfo: jest.fn(),
      logSelectBillingInfo: jest.fn(),
      logUpdateBillingInfo: jest.fn()
    },
    booking: {
      logBookAppointment: jest.fn()
    },
    category: {
      logCategoryImpression: jest.fn(),
      logSearchCategoryAttempt: jest.fn(),
      logSelectCategory: jest.fn(),
      logViewCategory: jest.fn()
    },
    checkout: {
      logCheckoutAction: jest.fn(),
      logInitiateCheckout: jest.fn()
    },
    coupon: {
      logApplyBenefit: jest.fn(),
      logCouponCodeError: jest.fn(),
      logRedeemCouponCode: jest.fn(),
      logRemoveBenefit: jest.fn(),
      logViewBenefitDetails: jest.fn(),
      logViewBenefitsWallet: jest.fn(),
      logViewQRStoreCoupon: jest.fn()
    },
    credit: {
      logAddCredits: jest.fn(),
      logSpendCredits: jest.fn(),
      logViewCredits: jest.fn()
    },
    fulfillment: {
      logViewFulfillmentStep: jest.fn(),
      logViewTracking: jest.fn()
    },
    geo: {
      logChangeLocation: jest.fn(),
      logFindLocation: jest.fn(),
      logOutOfCoverage: jest.fn(),
      logSetLocation: jest.fn()
    },
    help: {
      logRequestAssistance: jest.fn()
    },
    logCustomEvent: jest.fn(),
    loyalty: {
      logEarnPoints: jest.fn(),
      logSharePoints: jest.fn(),
      logSpendPoints: jest.fn(),
      logViewLoyaltyLevel: jest.fn()
    },
    order: {
      logCancelOrder: jest.fn(),
      logRateOrder: jest.fn(),
      logRequestRefund: jest.fn()
    },
    other: {
      logGenerateLead: jest.fn(),
      logPageView: jest.fn(),
      logSearchPageContent: jest.fn()
    },
    payment: {
      logChangePaymentType: jest.fn(),
      logSelectPaymentType: jest.fn(),
      logSetPaymentInfo: jest.fn()
    },
    product: {
      logCustomizeProduct: jest.fn(),
      logFilterProducts: jest.fn(),
      logProductImpression: jest.fn(),
      logSearchProductSuccess: jest.fn(),
      logSearchProductAttempt: jest.fn(),
      logSearchProductNotFound: jest.fn(),
      logSelectProduct: jest.fn(),
      logSortProducts: jest.fn(),
      logViewProductDetails: jest.fn()
    },
    purchase: {
      logPurchaseAttempt: jest.fn(),
      logPurchaseFail: jest.fn(),
      logPurchaseSuccess: jest.fn()
    },
    settings: {
      logViewSettings: jest.fn()
    },
    shipping: {
      logAddShippingAddress: jest.fn(),
      logSelectShippingAddress: jest.fn(),
      logUpdateShippingAddress: jest.fn()
    },
    shoppingCart: {
      logAddProductToCart: jest.fn(),
      logAddProductToWishlist: jest.fn(),
      logClearCart: jest.fn(),
      logRemoveProductFromCart: jest.fn(),
      logRemoveProductFromWishlist: jest.fn(),
      logUpdateProductInCart: jest.fn(),
      logUpdateProductInWishlist: jest.fn(),
      logViewCart: jest.fn()
    },
    social: {
      logShare: jest.fn()
    },
    store: {
      logChangeStore: jest.fn(),
      logSetStore: jest.fn()
    },
    user: {
      logSetUserInfo: jest.fn(),
      logUpdateUserInfo: jest.fn()
    },
    vendor: {
      logChangeVendor: jest.fn(),
      logSetVendor: jest.fn()
    },
    workflow: {
      logSelectWorkflow: jest.fn(),
      logUpdateWorkflow: jest.fn()
    }
  }
}));
