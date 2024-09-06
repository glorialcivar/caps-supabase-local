import { debounce } from "@simple/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import { Dimensions } from "react-native";

import { UseDimensionsConfig } from "./useDimensions.types";
import { UseDimensionsReturn } from "./useDimensions.types";

const useDimensions = (config: UseDimensionsConfig): UseDimensionsReturn => {
  const isMounted = useRef(true);
  const { container, offsets = {} } = config;
  const dimensions = Dimensions.get(container);
  const { width: offsetWidth = 0 } = offsets;
  const { height: offsetHeight = 0 } = offsets;
  const { width: screenWidth } = dimensions;
  const { height: screenHeight } = dimensions;

  const [width, setWidth] = useState(screenWidth - offsetWidth);
  const [height, setHeight] = useState(screenHeight - offsetHeight);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      debounce(dimensions => {
        if (!isMounted.current) return;
        const { width, height } = dimensions[container];
        setWidth(width - offsetWidth);
        setHeight(height - offsetHeight);
      }, 250)
    );

    return () => {
      subscription.remove();
    };
  }, [container, offsetWidth, offsetHeight]);

  return useMemo(() => ({ width, height }), [height, width]);
};

export default useDimensions;
