// Interfaces and types from component Home
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface HomeProps {
  navigation: HomeNavigation;
  route: HomeRoute;
}

// Screen params
export interface HomeParams {}

// Screen navigation type
export type HomeNavigation = StackNavigationProp<NavigatorScreens, "Home">;

// Screen route type
export type HomeRoute = RouteProp<NavigatorScreens, "Home">;

// Styled Component Props
export interface HomeStyledProps {}
