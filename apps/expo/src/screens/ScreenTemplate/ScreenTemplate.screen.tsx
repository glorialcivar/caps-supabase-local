import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { ScrollView, View } from "react-native";

import styles from "./ScreenTemplate.screen.styles";
import { ScreenTemplateProps as Props } from "./ScreenTemplate.screen.types";
import ErrorBoundary from "components/global/ErrorBoundary/ErrorBoundary";
import useDimensions from "hooks/useDimensions/useDimensions";

const ScreenTemplate: React.FC<Props> = props => {
  const { scrollable = true, children } = props;
  const headerHeight = useHeaderHeight();
  const { width, height } = useDimensions({
    container: "window",
    offsets: { height: headerHeight }
  });
  const calculatedStyle = { minWidth: width, maxWidth: width, height };

  let base = (
    <View style={[styles.container, calculatedStyle]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </View>
  );

  if (!scrollable) {
    base = <View style={[styles.container, calculatedStyle]}>{children}</View>;
  }
  return <ErrorBoundary>{base}</ErrorBoundary>;
};

ScreenTemplate.defaultProps = {};

export default ScreenTemplate;
