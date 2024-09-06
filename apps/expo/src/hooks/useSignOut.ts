import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useVendorsStore } from "@simple/stores";

import CONSTANTS from "config/constants";
import { HomeNavigation } from "screens/Home/Home.screen.types";
import { useAuthStore } from "stores/auth/auth.store";

const { STORAGE } = CONSTANTS;
const { BILLING_DATA_TOKEN } = STORAGE;
const { CATEGORY_TOKEN, SELECTED_COORDINATES_TOKEN } = STORAGE;
const { SHIPPING_ADDRESS_TOKEN, THEME_PREFERENCE_TOKEN } = STORAGE;

const useSignOut = () => {
  const { navigate } = useNavigation<HomeNavigation>();
  const resetAuthStore = useAuthStore(state => state.reset);
  const resetVendorsStore = useVendorsStore(state => state.reset);

  const cleanLocalStorage = () => {
    const tokens = [
      SHIPPING_ADDRESS_TOKEN,
      BILLING_DATA_TOKEN,
      CATEGORY_TOKEN,
      THEME_PREFERENCE_TOKEN,
      SELECTED_COORDINATES_TOKEN
    ];
    tokens.forEach(token => {
      AsyncStorage.removeItem(token);
    });
  };

  const signOut = async () => {
    cleanLocalStorage();
    resetVendorsStore();
    auth().signOut();
    resetAuthStore();
    navigate("Home");
  };

  return signOut;
};

export default useSignOut;
