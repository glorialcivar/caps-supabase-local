// Navigator helper functions and data
import { createNavigationContainerRef } from "@react-navigation/native";
import { LinkingOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createURL } from "expo-linking";

import { NavigatorScreens } from "./Navigator.types";

export const navigationRef = createNavigationContainerRef<NavigatorScreens>();

export const Stack = createStackNavigator<NavigatorScreens>();

export const prefix = createURL("/");

export const linking: LinkingOptions<NavigatorScreens> = {
  prefixes: [prefix],
  config: {
    screens: {}
  }
};
