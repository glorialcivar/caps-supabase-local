// Initialize Artisan
import useSetupAnalytics from "./useSetupAnalytics";
import useSetupShoppingCart from "./useSetupShoppingCart";

const useSetupArtisan = () => {
  useSetupShoppingCart();
  useSetupAnalytics();
};

export default useSetupArtisan;
