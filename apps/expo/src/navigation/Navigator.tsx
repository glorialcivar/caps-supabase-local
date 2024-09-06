import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import Home from "screens/Home/Home.screen";
import ServerError from "screens/ServerError/ServerError.screen";

const Stack = createStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = props => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Trade" }}
          />
          <Stack.Screen
            name="ServerError"
            component={ServerError}
            options={{ title: "Oops Something went wrong" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

Navigator.defaultProps = {};

export default Navigator;
