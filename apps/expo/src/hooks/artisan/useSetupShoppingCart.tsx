// Initialize ShoppingCart
// import auth from "@react-native-firebase/auth";
// import { useShoppingCartStore } from "@simple/stores";
// import { checkInit, listenShoppingCart } from "artisn-rn/shopping-cart";
// import { closeShoppingCart, initShoppingCart } from "artisn-rn/shopping-cart";
// import { listenBenefitsWallet } from "artisn-rn/shopping-cart";
// import { useEffect, useRef } from "react";
// import { Platform } from "react-native";

// import CONSTANTS from "config/constants";
// import { useAuthStore } from "stores/auth/auth.store";
// import { defaultFunction } from "utils/common.utils";

// const { ARTISN, FEATURE_FLAGS, API } = CONSTANTS;
// const { SHOPPING_CART_DEFAULT_NAME, DEFAULT_VENDOR } = ARTISN;
// const { ACCOUNT_ID, SHOPPING_CART_WISHLIST_NAME } = ARTISN;
// const { WITH_WISHLIST } = FEATURE_FLAGS;
// const { id: vendorId } = DEFAULT_VENDOR;
// const { API_URL } = API;

const useSetupShoppingCart = () => {
  // const setShoppingCart = useShoppingCartStore(state => state.setShoppingCart);
  // const setWishlist = useShoppingCartStore(state => state.setWishlist);
  // const setBenefitsWallet = useShoppingCartStore(
  //   state => state.setBenefitsWallet
  // );
  // const isAnonymous = useAuthStore(state => state.isAnonymous);
  // const customerId = auth()?.currentUser?.uid;
  // const unsubscribeCart = useRef<typeof defaultFunction>(defaultFunction);
  // const unsubscribeWishlist = useRef<typeof defaultFunction>(defaultFunction);
  // const closeHandler = () => {
  //   if (!checkInit()) return;
  //   unsubscribeCart.current();
  //   unsubscribeWishlist.current();
  //   closeShoppingCart();
  // };
  // useEffect(() => {
  //   // start listening to wallet changes
  //   let unsubscribe = defaultFunction;
  //   (async () => {
  //     const token = await auth().currentUser?.getIdToken();
  //     if (!token) return;
  //     if (!customerId || checkInit() || typeof isAnonymous === "undefined") {
  //       return;
  //     }
  //     // initialize shopping cart
  //     initShoppingCart({
  //       accountId: ACCOUNT_ID,
  //       customerId,
  //       platform: Platform.OS
  //     });
  //     // listen default cart changes
  //     const cart = await listenShoppingCart(cart => setShoppingCart(cart), {
  //       shoppingCartName: SHOPPING_CART_DEFAULT_NAME,
  //       anonymous: isAnonymous
  //     });
  //     unsubscribeCart.current = cart;
  //     if (!WITH_WISHLIST || isAnonymous) return;
  //     // listen wishlist cart changes
  //     const wishlist = await listenShoppingCart(cart => setWishlist(cart), {
  //       shoppingCartName: SHOPPING_CART_WISHLIST_NAME,
  //       anonymous: isAnonymous
  //     });
  //     unsubscribeWishlist.current = wishlist;
  //     try {
  //       unsubscribe = listenBenefitsWallet(
  //         wallet => setBenefitsWallet(wallet),
  //         {
  //           customerId,
  //           vendorId,
  //           shoppingCartName: SHOPPING_CART_DEFAULT_NAME,
  //           anonymous: isAnonymous,
  //           apiURL: API_URL
  //         },
  //         new Headers({ Authorization: `Bearer ${token}` })
  //       );
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   })();
  //   // If rerenders ensures it closes the old shoppingCart
  //   return () => {
  //     /*
  //       TODO: Mejorar closeHandler para que cree una cola de promesas y no se
  //       cierre mientras no se resuelvan todas pero si bloquee nuevas promesas
  //     */
  //     closeHandler();
  //     unsubscribe();
  //   };
  // }, [
  //   customerId,
  //   setShoppingCart,
  //   setWishlist,
  //   setBenefitsWallet,
  //   isAnonymous
  // ]);
};

export default useSetupShoppingCart;
