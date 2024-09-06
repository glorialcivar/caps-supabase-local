import React from "react";
import { View } from "react-native";

import styles from "./Home.screen.styles";
import { HomeProps as Props } from "./Home.screen.types";
import Home from "components/home/Home/Home";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const HomeScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate scrollable={false}>
      <View style={styles.container}>
        <Home />
      </View>
    </ScreenTemplate>
  );
};

export default HomeScreen;
