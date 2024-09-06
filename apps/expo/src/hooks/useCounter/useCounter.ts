import { useMemo, useState, useCallback, useEffect } from "react";

import { UseCounterConfig } from "./useCounter.types";

const defaultFunction = () => {};

const useCounter = (config: UseCounterConfig) => {
  const { onChange = defaultFunction, initialValue = 0, min = 0 } = config;
  const { onAdd = defaultFunction, onSubstract = defaultFunction } = config;
  const { max = 100 } = config;
  const [quantity, setQuantity] = useState(initialValue);

  const add = useCallback(() => {
    if (quantity < max) {
      setQuantity(prev => {
        const newQuantity = prev + 1;
        onChange(newQuantity);
        onAdd(newQuantity);
        return newQuantity;
      });
    }
  }, [onChange, onAdd, quantity, max]);

  const substract = useCallback(() => {
    if (quantity > min) {
      setQuantity(prev => {
        const newQuantity = prev - 1;
        onChange(newQuantity);
        onSubstract(newQuantity);
        return newQuantity;
      });
    }
  }, [onSubstract, quantity, onChange, min]);

  useEffect(() => {
    setQuantity(initialValue);
  }, [initialValue]);

  return useMemo(
    () => ({
      add,
      substract,
      quantity
    }),
    [add, substract, quantity]
  );
};

export default useCounter;
