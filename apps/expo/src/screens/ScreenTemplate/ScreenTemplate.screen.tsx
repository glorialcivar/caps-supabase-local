import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { ScrollView, View } from "react-native";

import styles from "./ScreenTemplate.screen.styles";
import { ScreenTemplateProps as Props } from "./ScreenTemplate.screen.types";
import ErrorBoundary from "components/global/ErrorBoundary/ErrorBoundary";
import useDimensions from "hooks/useDimensions/useDimensions";

const ScreenTemplate: React.FC<Props> = props => {
  const { scrollable = true, children, style } = props;
  const headerHeight = useHeaderHeight();
  const { width, height } = useDimensions({
    container: "window",
    offsets: { height: headerHeight }
  });
  const calculatedStyle = { minWidth: width, maxWidth: width, height };
  const containerStyle = [styles.container, calculatedStyle, style];

  let base = (
    <View style={containerStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );

  if (!scrollable) {
    base = <View style={containerStyle}>{children}</View>;
  }
  return <ErrorBoundary>{base}</ErrorBoundary>;
};

export default ScreenTemplate;
