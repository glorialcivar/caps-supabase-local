import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = props => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Expo simple commerce</Text>
      </View>
    </SafeAreaView>
  );
};

Home.defaultProps = {};

export default Home;
