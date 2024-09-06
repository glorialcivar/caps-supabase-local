import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFetchCards } from "@simple/services";
import { usePaymentsStore } from "@simple/stores";
import { useEffect } from "react";

import CONSTANTS from "config/constants";
// import { useAuthStore } from "stores/auth/auth.store";

const { CARD_TOKEN } = CONSTANTS.STORAGE;

const useListenPayments = () => {
  const selectedCard = usePaymentsStore(state => state.selectedCard);
  // const setSelectedCard = usePaymentsStore(state => state.setSelectedCard);
  // const auth = useAuthStore();
  // const { data: cards } = useFetchCards(auth);

  // Get card from local storage and set it on context
  // useEffect(() => {
  //   (async () => {
  //     const value = await AsyncStorage.getItem(CARD_TOKEN);
  //     const lastSelectedCard = value ? JSON.parse(value) : undefined;
  //     if (!cards) {
  //       setSelectedCard(lastSelectedCard);
  //       return;
  //     }
  //     const [firstCard] = cards;
  //     const card = lastSelectedCard ?? firstCard;
  //     setSelectedCard(card);
  //   })();
  // }, [cards, setSelectedCard]);

  // Every time the selected card changes, save it on local storage
  useEffect(() => {
    if (!selectedCard) return;
    AsyncStorage.setItem(CARD_TOKEN, JSON.stringify(selectedCard));
  }, [selectedCard]);
};

export default useListenPayments;
