// Navigator types and interfaces
import { HomeParams } from "screens/Home/Home.screen.types";
import { ServerErrorParams } from "screens/ServerError/ServerError.screen.types";

// Component props
export interface NavigatorProps {}

// Navigator screens and screens params
export type NavigatorScreens = {
  Home?: HomeParams;
  ServerError?: ServerErrorParams;
};
