// Navigation interfaces and types
import { EventArg, NavigationAction } from "@react-navigation/native";

export type BeforeRemoveEvent = EventArg<
  "beforeRemove",
  true,
  {
    action: NavigationAction;
  }
>;
