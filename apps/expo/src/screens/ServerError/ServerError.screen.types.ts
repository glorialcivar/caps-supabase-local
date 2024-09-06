// Interfaces and types from component ServerError
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface ServerErrorProps {
  navigation: ServerErrorNavigation;
  route: ServerErrorRoute;
  error?: Error;
  resetError?: () => void;
}

// Screen params
export interface ServerErrorParams {}

// Screen navigation type
export type ServerErrorNavigation = StackNavigationProp<
  NavigatorScreens,
  "ServerError"
>;

// Screen route type
export type ServerErrorRoute = RouteProp<NavigatorScreens, "ServerError">;

// Styled Component Props
export interface ServerErrorStyledProps {}
